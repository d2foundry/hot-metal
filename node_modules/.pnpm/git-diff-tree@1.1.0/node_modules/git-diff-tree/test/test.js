/* eslint-disable func-names */
'use strict';

should = require('should');
var proxyquire = require('proxyquire');
var fs = require('fs');

var streamingParser = require('../lib/parseStream');

describe('git-diff-tree', function() {
  it('should parse the output', function(done) {
    var inputStream = fs.createReadStream(__dirname + '/in.txt', { encoding: 'utf8' });

    var results = {};

    streamingParser(inputStream).on('data', function(type, val) {
      if (!results[type]) { results[type] = []; }
      results[type].push(val);
    }).on('error', function(err) {
      throw err;
    }).on('end', function() {
      // bug in mocha? the following does not work:
      // results.should.eql(require(__dirname + '/out.json'));
      // workaround:
      JSON.stringify(results).should.eql(JSON.stringify(require(__dirname + '/out.json')));

      done();
    });
  });

  it('should create the command correctly', function(done) {
    var repoPath = '/home/node.git';
    var opts = {
      MAX_DIFF_SIZE: 12345,
      rev: 'master',
      originalRev: 'HEAD^^^^'
    };

    var gitDiffTree = proxyquire('../', {
      './lib/parseStream': function(inputStream) {
        inputStream.should.eql('git-spawned-stream');
      },
      'git-spawned-stream': function(path, args, MAX_DIFF_SIZE) {
        path.should.eql(repoPath);
        opts.MAX_DIFF_SIZE.should.eql(MAX_DIFF_SIZE);

        var _args = ['diff-tree', '--patch-with-raw', '--numstat', '--full-index',
          '--no-commit-id', '-M', opts.originalRev, opts.rev, '--'];

        args.should.eql(_args);

        return 'git-spawned-stream';
      }
    });

    gitDiffTree(repoPath, opts);

    done();
  });
});
