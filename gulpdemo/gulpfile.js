var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

gulp.task('compress',function(){
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('minify',function(){
    return gulp.src('./src/css/*.css')
    .pipe(minify())
    .pipe(gulp.dest('./build/css/'))
})

gulp.task('default', ['compress','minify']);