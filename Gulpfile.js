var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var connect    = require('gulp-connect');
var sass       = require('gulp-sass');
var jshint     = require('gulp-jshint');
var gulpif     = require('gulp-if');
var uglify     = require('gulp-uglify');
var minifyCss  = require('gulp-minify-css')
var minifyHTML = require('gulp-minify-html')
var sourcemaps = require('gulp-sourcemaps');


var config = {
    sassPath: './resource/sass',
    bowerDir: './bower_components'
}

var env = process.env.NODE_ENV || "development"



gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/bootstrap-sass-official/assets/fonts/bootstrap/**.*')
            .pipe(gulp.dest('./build/fonts'))
})


gulp.task('connect', function() {
    connect.server({
        root: [__dirname + '/build/'],  //important
        livereload: true,
        port: 8000
    })
})

//刷新
gulp.task('refresh', function() {
    gulp.src('./build/index.html')
        .pipe(connect.reload());
})

gulp.task('html', function() {
    gulp.src('./index.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./build/'))
})

gulp.task('script', function() {
    gulp.src('./src/javascript/main.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(gulpif('production' == env, uglify()))
        .pipe(gulp.dest('./build/javascript/'))
        .pipe(connect.reload());
})

gulp.task('sass', function() {
    gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulpif('production' == env, minifyCss()))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css/'))
})

gulp.task('watch', function() {
    gulp.watch([
        './src/javascript/*.js',
        './src/scss/main.scss',    
        './*.html'
    ], ['html', 'script', 'sass'])
})

gulp.task('lint', function() {
  return gulp.src('./src/javascript/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['connect', 'watch'])