'use strict';

var gulpIsort = require('../lib');
var should = require('should');
var File = require('vinyl');

require('mocha');

describe('gulp-isort failOnError', function() {
  it('should fail a file immediately if an error is found', function(done) {
    var lintStream = gulpIsort();

    function endWithoutError() {
      done(new Error('An error was not thrown before ending'));
    }

    lintStream.pipe(gulpIsort.failOnError())
    .on('error', function(err) {
      this.removeListener('finish', endWithoutError);
      should.exists(err);
      err.message.should.equal('test/fixtures/invalid.py\nERROR:  Imports are incorrectly sorted.');
      err.plugin.should.equal('gulp-isort');
      done();
    })
    .on('finish', endWithoutError);

    lintStream.write(new File({
      path: 'test/fixtures/invalid.py',
      contents: new Buffer('import b\nimport a')
    }));

    lintStream.end();
  });
});
