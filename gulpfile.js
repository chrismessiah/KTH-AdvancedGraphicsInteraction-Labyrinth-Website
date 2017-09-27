// Handy addons

// var jshint = require('gulp-jshint');
// var uglify = require('gulp-uglify');
// var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');

const SASS_PATH = 'assets/styles';
const SCRIPT_PATH = 'assets/scripts';

// *************************** IMPORTS ***********************************

// Basic tools
var gulp = require('gulp');
var open = require('gulp-open');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var del = require('del');
var minify = require('gulp-minify');
var pump = require('pump');

// for CSS
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var stripCssComments = require('gulp-strip-css-comments');
var sourcemaps = require('gulp-sourcemaps');

// for server
var lr = require('tiny-lr')();

var refresh = function(event) {
  var fileName = require('path').relative(__dirname, event.path);
  gutil.log.apply(gutil, [gutil.colors.magenta(fileName), gutil.colors.cyan('built')]);
  lr.changed({
    body: { files: [fileName] }
  });
}

// *************************** IMPORTS ***********************************



// **************************** CSS ******************************************

gulp.task('compile-sass', function() {
  return gulp.src(`${SASS_PATH}/master.sass`)
    .pipe(sass({indentedSyntax: true}))
    .pipe(rename({suffix: '.sass'}))
    .pipe(gulp.dest('public'));
});

gulp.task('concat-css',['compile-sass'], function() {
  return gulp.src([
    'public/master.sass.css',
    'node_modules/sweetalert/src/sweetalert.css',
  ])
  .pipe(concat('master.css'))
  .pipe(gulp.dest('public'));
});

gulp.task('minify-css',['compile-sass', 'concat-css'], function() {
  return gulp.src('public/master.css')
  .pipe(rename({suffix: '.min'}))
  .pipe(stripCssComments())
  .pipe(cssnano())
  .pipe(gulp.dest('public'));
});

// **************************** CSS *******************************************




// **************************** JS  *******************************************

gulp.task('concat-js', function() {
  // ADD ALL BOWER JS FILES HERE
  return gulp.src([
      // 'bower_components/jquery/dist/jquery.min.js',
      // 'bower_components/scrollreveal/dist/scrollreveal.min.js',
      'node_modules/sweetalert/dist/sweetalert.min.js',
      // 'bower_components/typed.js/dist/typed.min.js',
      // 'bower_components/velocity/velocity.min.js',
      `${SCRIPT_PATH}/*.js`
    ])
    .pipe(concat('master.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('minify-js', ['concat-js'], function(cb) {
  pump([
    gulp.src('public/master.js'),
    minify({ext: {src:'.js',min:'.min.js'}}),
    gulp.dest('public')
  ], cb);
  // return gulp.src('public/master.js')
  // .pipe(minify({
  //     ext: {
  //         src:'.js',
  //         min:'.min.js'
  //     }
  // }))
  // .pipe(gulp.dest('public'));
});

// **************************** JS  *******************************************

// **************************** GULP TASKS  ***********************************

gulp.task('serve', function () {
  app = require('./server.js');
  lr.listen(35729);

  gulp.src('')
  .pipe(open({uri: 'http://localhost:3000'}));
});

gulp.task('cleanup',['minify-css', 'minify-js'], function() {
  del('public/master.js');
  del('public/master.css');
  del('public/master.sass.css');
});

gulp.task('styles', ['compile-sass', 'concat-css', 'minify-css']);
gulp.task('scripts', ['concat-js', 'minify-js']);
gulp.task('default', ['styles', 'scripts', 'cleanup', 'serve', 'watch']);

gulp.task('watch', function() {
  gulp.watch(`${SASS_PATH}/*.sass`, ['styles', 'cleanup']);
  gulp.watch(['bower_components/*', `${SCRIPT_PATH}/*.js`], ['scripts', 'cleanup']);
  gulp.watch(['public/master.html', 'public/master.min.js', 'public/master.min.css'], refresh);
});
