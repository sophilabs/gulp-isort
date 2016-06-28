'use strict';
var util = require('util');
var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var cp = require('child_process');

function gulpIsort(opts) {
  opts = opts || {};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    } else if (file.isStream()) {
      cb(new gutil.PluginError('gulp-isort', 'Streaming not supported'));
      return;
    }
    file.isort = {};
    var isort = cp.spawn('isort', ['-c', '-']);
    isort.stdout.on('data', function (data) {
      file.isort.errors = util.format('%s\n%s', file.path, data.toString().trim());
    });
    isort.on('exit', function (code) {
      cb(null, file);
    });
    isort.stdin.write(file.contents);
    isort.stdin.end();
  });
};

gulpIsort.failOnError = function() {
  return through.obj(function (file, enc, cb) {
    if (!file.isort || !file.isort.errors) {
      cb(null, file);
      return;
    }
    cb(new gutil.PluginError(
      'gulp-isort',
      {
        name: 'IsortError',
        message: file.isort.errors
      }
    ));
  });
};

module.exports = gulpIsort;
