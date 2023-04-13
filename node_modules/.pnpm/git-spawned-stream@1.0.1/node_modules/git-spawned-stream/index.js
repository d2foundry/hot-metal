"use strict";

var run = require('spawn-to-readstream');
var spawn = require('child_process').spawn;
var debug = require('debug')('git-spawned-stream');

module.exports = function(repoPath, args, limit, gitCommand = 'git') {
  var _args = ['--git-dir=' + repoPath];

  // The limit is a git bin path
  if (typeof limit === 'string') {
    debug('got string limit, using it as gitCommand and unsetting limit');
    gitCommand = limit;
    limit = undefined;
  }

  args.forEach(function(item) {
    _args.push(item);
  });

  debug('args', _args);
  debug('limit', limit);
  debug('gitCommand', gitCommand);

  return run(spawn(gitCommand, _args), limit);
};
