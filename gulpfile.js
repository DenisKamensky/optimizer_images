var gulp = require('gulp');
var tinypng = require('gulp-tinypng');
var clean = require('gulp-clean');
gulp.task('tinypng', function () {
    gulp.src('src/**/*.*')
        .pipe(tinypng('LOS6_ciVHxNcie7NPlwd-xl_vm067sfm'))
        .pipe(gulp.dest('compressed_images/'));
});
gulp.task('clean', function () {
    return gulp.src('src/*', {read: false})
        .pipe(clean());
});
gulp.task('default',function(){
	gulp.watch('src/**',['tinypng']);
});