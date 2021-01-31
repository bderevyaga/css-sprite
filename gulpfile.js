'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const spritesmith = require('gulp.spritesmith');

gulp.task('sprite', () => {
  gulp.src('./icon/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
      cssFormat: 'css'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sprite-min', () => {
  gulp.src('./dist/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist'))
});

gulp.task('sprite-all', [
  'sprite',
  'sprite-min'
]);