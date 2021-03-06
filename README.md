# Gulp Isort

[![travis][travis-image]][travis-url]
[![coverage][coveralls-image]][coveralls-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![js-semistandard-style][semi-image]][semi-url]
[![license][license-image]][license-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]

Gulp task for isort.

## Installation

```bash
npm install gulp-isort
```

## Usage

```javascript
var gulp = require('gulp');
var gulpIsort = require('gulp-isort');

gulp.task('isort', function () {
  return gulp.src('**/*')
    .pipe(gulpIsort())
    .pipe(gulpIsort.failOnError());
});
```

## License

Gulp Isort is Copyright (c) 2016 sophilabs, inc. It is free software, and may be
redistributed under the terms specified in the [license] file.

## About

[![sophilabs][sophilabs-image]][sophilabs-url]

Gulp Isort is maintained and funded by sophilabs, inc. The names and logos for
sophilabs are trademarks of sophilabs, inc.

[license]: /LICENSE
[sophilabs-image]: https://s3.amazonaws.com/sophilabs-assets/logo/logo_300x66.gif
[sophilabs-url]: https://sophilabs.co
[travis-image]: https://img.shields.io/travis/sophilabs/gulp-isort.svg?style=flat-square
[travis-url]: https://travis-ci.org/sophilabs/gulp-isort
[npm-image]: https://img.shields.io/npm/v/gulp-isort.svg?style=flat-square
[npm-url]: https://npmjs.org/packge/gulp-isort
[downloads-image]: https://img.shields.io/npm/dm/gulp-isort.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/gulp-isort
[semi-image]: https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square
[semi-url]: https://github.com/Flet/semistandard
[coveralls-image]: https://img.shields.io/coveralls/sophilabs/gulp-isort.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/sophilabs/gulp-isort?branch=master
[license-image]: https://img.shields.io/github/license/sophilabs/gulp-isort.svg?style=flat-square
[license-url]: /LICENSE
[dependencies-image]: https://david-dm.org/sophilabs/gulp-isort.svg?style=flat-square
[dependencies-url]: https://david-dm.org/sophilabs/gulp-isort
[dev-dependencies-image]: https://david-dm.org/sophilabs/gulp-isort/dev-status.svg?style=flat-square
[dev-dependencies-url]: https://david-dm.org/sophilabs/gulp-isort#info=devDependencies
