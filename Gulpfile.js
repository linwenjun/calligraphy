var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var connect    = require('gulp-connect');

gulp.task('script', function() {
    gulp.src('./main.js')
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
        port: 8001
    })
})

//刷新
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch([
        './*.js',
        './*.html'
    ], ['script','html']);
})

gulp.task('default', ['connect', 'watch'])