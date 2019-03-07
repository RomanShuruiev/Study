var gulp = require('gulp'),
	sass = require('gulp-sass');
	/*
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename');
	del = require('del');
	*/

gulp.task('sass', function(){
	return gulp.src(['app/sass/*.sass'])
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('app/css'))
	//.pipe(browserSync.reload({stream: true}))
});
/*
gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', function(){
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: .min}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean', function(){
	return del.sync('dist');
});
*/

gulp.task('watch', function(){
	gulp.watch(['app/sass/*.sass'], ['sass']);
});

gulp.task('default', ['watch']);

//gulp.task('watch', /*['browser-sync','sass'],*/ function(){
	/*
	gulp.watch('app/sass/main.sass', gulp.series('sass'));
	gulp.watch('app/index.html', browserSync.reload);
	*/
	//gulp.watch('app/js/**/*.js', browserSync.reload);
//});

/*
gulp.task('build', function(){
	var builCss = gulp.src([
		'app/css/main/css',
		'app/css/libs.min.css',
		])
	.pipe(gulp.dest(dist/css));
	*/

	//var BuildFonts = gulp.src('app/fonts/**/*')

	//.pipe(gulp.dest('dist/fonts'));

	//var buildJs = gulp.src('app/js/**/*.js')
	//.pipe(gulp.dest('dist/js'));

	//var buildHtml = gulp.src('app/*.html')
	//.pipe(gulp.dest('dist'));
//});
