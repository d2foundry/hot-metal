'use strict';

var splitStream = require('split-transform-stream');
var through = require('through2');
var parseRawDiffLine = require('./parseRawDiffLine');
var streamDiff = require('./streamDiff');

module.exports = function parseStream(inputStream, ops) {
  var patchStream;
  var patchStreamRes;
  var outStream;

  var opts = ops || {};

  // don't output data for files that have more lines changed than allowed
  var MAX_DIFF_LINES_PER_FILE = opts.MAX_DIFF_LINES_PER_FILE || 300;

  // files that are renamed, deleted or have more than X changes
  var noShow = [];
  // files that have a tone of changes
  var blacklist = [];

  var isCut = false;

  inputStream.on('end', function handleStreamEnd(limitExceeded) {
    if (limitExceeded) { isCut = true; }
  });

  function initPatchStream() {
    patchStream = through({ objectMode: true });
    patchStreamRes = streamDiff(patchStream, noShow);

    patchStreamRes.on('data', function processPatchChunk(data) {
      outStream.emit('data', 'patch', data);
    }).on('error', function handlePatchStreamError(err) {
      outStream.emit(err);
    });

    if (blacklist.length) {
      outStream.emit('data', 'noshow', blacklist);
    }
  }

  function writeRaw(line) {
    var parsed = parseRawDiffLine(line);

    if (parsed.status === 'D' || parsed.similarity === 100) {
      noShow.push(parsed.toFile || parsed.fromFile);
    }

    this.emit('data', 'raw', parseRawDiffLine(line));
  }

  function writePatch(line) {
    if (patchStream) {
      patchStream.push(line);
    } else {
      initPatchStream();
      patchStream.push(line);
    }
  }

  function writeStats(stats) {
    var tmp = stats[3].split(' => ');
    var added = parseInt(stats[1], 10);
    var deleted = parseInt(stats[2], 10);

    if ((added + deleted) > MAX_DIFF_LINES_PER_FILE) {
      noShow.push(tmp[1] || tmp[0]);
      blacklist.push(tmp[1] || tmp[0]);
    }

    this.emit('data', 'stats', {
      added: added,
      deleted: deleted,
      fileA: tmp[0],
      fileB: tmp[1]
    });
  }

  var end = function end(cb) {
    patchStream.emit('end');

    if (isCut) {
      this.emit('cut');
    }

    cb();
  };

  var type = 'raw';

  var write = function write(line, enc, cb) {
    if (type === 'patch') {
      writePatch.call(this, line);
    } else {
      var stats = line.match(/^(\d+)\t(\d+)\t(.*)( => (.*))?/);

      if (type !== 'patch' && stats) {
        writeStats.call(this, stats);
      } else if (type !== 'patch' && /^-\t-\t/.test(line)) {
        // binary file
      } else if (!line) {
        type = 'patch';
        writePatch.call(this, line);
      } else {
        writeRaw.call(this, line);
      }
    }

    cb();
  };

  outStream = splitStream(inputStream, write, end);

  return outStream;
};
