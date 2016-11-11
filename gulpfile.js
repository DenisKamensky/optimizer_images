var gulp = require('gulp');
var tinypng = require('gulp-tinypng');
gulp.task('tinypng', function () {
    gulp.src('src/**/*.*')
        .pipe(tinypng('77B3MztS7Ebjbv4WY1mApnKUPKRf1Xaa'))
        .pipe(gulp.dest('compressed_images/'));
});
gulp.task('default',function(){
	gulp.watch('src/**',['tinypng']);
});