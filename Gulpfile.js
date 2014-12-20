var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var connect    = require('gulp-connect');
var sass       = require('gulp-sass');
var jshint     = require('gulp-jshint');

gulp.task('script', function() {
    gulp.src('./src/javascript/main.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(gulp.dest('./build/'))
})


gulp.task('connect', function() {
    connect.server({
        root: [__dirname],  //important
        livereload: true,
        port: 8000
    })
})

//刷新
gulp.task('html', ['script', 'sass'], function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
})

gulp.task('sass', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/'))
})

gulp.task('watch', function() {
    gulp.watch([
        './src/javascript/*.js',
        './src/scss/main.scss',    
        './*.html'
    ], ['html']);
})

gulp.task('lint', function() {
  return gulp.src('./src/javascript/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['connect', 'watch'])