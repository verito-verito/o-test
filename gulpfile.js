var gulp            = require ('gulp'),
    sass            = require ('gulp-sass'),
    rename          = require('gulp-rename'),
    wrap            = require('gulp-wrap'),
    csscomb         = require('gulp-csscomb'),
    watch           = require('gulp-watch'),
    scsslint        = require('gulp-scsslint'),
    autoprefixer    = require('gulp-autoprefixer'),
    args            = require('yargs').argv,
    gutil           = require('gulp-util'),
    notify          = require('gulp-notify'),
    notipath        = require('path'),
    photorankAddonsPath = '../Photorank/addons2/<%= name %>/'
    messages = {
        watching : 'Watching **/*.scss on <%= name %>',
        saving : 'Saving data on <%= path %>',
        watchingLocal: 'Watching ./src/**/*.scss'
    };

/** 
 * scsslint requires Ruby and the gem scss-lint:
 * gem update --system && gem install scss-lint
 */

/* Show lint number of warnings as Mac native notification */
var scssLintReporter = function(file) {
  if ( !file.scsslint.success ) {
    notify({
        title: 'Shit... see the console please!',
        sound: 'Purr',
        icon: notipath.join(__dirname, 'grumpy.png')
    }).write({ message: 'Number of warnings: ' + file.scsslint.errorCount  });
  }
};

gulp.task('x-wing-lintscss', function (){
    gulp.src('./src/**/*.scss')
        .pipe(scsslint('scss-lint.yml'))
        .pipe(scsslint.reporter(scssLintReporter))
        .pipe(scsslint.reporter());
});

gulp.task('x-wing-styles', function (){
    gulp.src('./src/olapic_wallv2/styles.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false}))
        .pipe(csscomb())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['x-wing-lintscss', 'x-wing-styles'], function(){
    gutil.log(gutil.colors.green(messages.watchingLocal));
            
    gulp.watch('./src/**/*.scss', ['x-wing-lintscss']),
    gulp.watch('./src/**/*.scss', ['x-wing-styles']);
});

