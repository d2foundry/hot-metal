'use strict';

var gitSpawnedStream = require('git-spawned-stream');
var parseStream = require('./lib/parseStream');

function diffTree(repoPath, ops) {
  var opts = ops || {};
  var rev = opts.rev || 'HEAD';
  var revParent = opts.originalRev || '--root';

  var args = [];
  args.push('diff-tree', '--patch-with-raw', '--numstat');
  args.push('--full-index', '--no-commit-id', '-M', revParent, rev, '--');

  // when the diff output is bigger than the limit destroy the stream
  var MAX_DIFF_SIZE = opts.MAX_DIFF_SIZE || (3 * 1024 * 1024); // 3 Mb

  return parseStream(gitSpawnedStream(repoPath, args, MAX_DIFF_SIZE), opts);
}

module.exports = diffTree;
