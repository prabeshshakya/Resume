var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', () => {
	return gulp.src('./src/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.stream());
});

gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('sync', ['sass'], () => {
	 browserSync.init({
        server: "./dist"
    });
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch("./dist/*.html").on('change', browserSync.reload);
});