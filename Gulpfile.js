var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var connect    = require('gulp-connect');
var sass       = require('gulp-sass');

gulp.task('script', function() {
    gulp.src('./src/script/main.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: false
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
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
})

gulp.task('sass', function() {
    gulp.src('./src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./build/'))
})

gulp.task('watch', function() {
    gulp.watch([
        './src/javascript/.js',
        './src/sass/main.sass',
        './*.html'
    ], ['script', 'sass', 'html']);
})

gulp.task('default', ['connect', 'watch'])