var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {

  var spriteData = gulp.src('./icon/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    cssFormat: 'css'
  }));

  spriteData.pipe(gulp.dest('./'));
});

gulp.task('img', () =>
    gulp.src('./*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);