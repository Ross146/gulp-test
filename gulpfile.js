var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');

gulp.task('styles', function(){
    gulp.src('./css/1.css')
    .pipe(concatCss('./css/all.css'))
//    .pipe(stylus({
//        use: [nib()]
//    }))
//    .pipe(rename('style.css'))
    .pipe(gulp.dest('./app/'));
});

gulp.task('watch:styles', function() {
    gulp.watch('./css/*.css', ['styles']);    
});