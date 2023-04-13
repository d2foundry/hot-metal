/* eslint-disable no-console, func-names */
'use strict';

var gitDiffTree = require('../');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/../.git'));

// if originalRev is provided, the diffTree will compare it with rev
// else it will compare the rev with the root
gitDiffTree(repoPath, {
  rev: process.env.REV || null // defaults to 'HEAD'
  // originalRev : 'HEAD^^^^^' // defaults to --root
  // don't output data for files that have more lines changed than allowed
  // MAX_DIFF_LINES_PER_FILE: 300,
  // when the diff output is bigger than the limit destroy the stream
  // MAX_DIFF_SIZE: (3 * 1024 * 1024) // 3 Mb
}).on('data', function(type, data) {
  if (type === 'raw') {
    console.log('RAW DATA');
  } else if (type === 'patch') {
    console.log('PATCH DATA');
  } else if (type === 'stats') {
    console.log('FILE STATS');
  } else if (type === 'noshow') {
    console.log('Diffs not shown because files were too big');
  }
  console.log('------ \n');
  console.log(data);
  console.log('=================\n');
  // console.log(type, data);
}).on('error', function(err) {
  console.log('OH NOES!!');
  throw err;
}).on('cut', function() {
  console.log('-----------------');
  console.log('Diff to big, got cut :|');
}).on('end', function() {
  console.log('-----------------');
  console.log('That\'s all folks');
});
