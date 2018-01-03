var version = "1.0.0-SNAPSHOT";

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');


var plugins = gulpLoadPlugins(
    {
      pattern: ['gulp-*', 'gulp.*', 'del', 'run-sequence', 'uglify']
      // TODO - run-sequence can be removed with gulp 4.0 => there will be standard solution for this
    }
);

var fs = require('fs');

var config = {
  bowerComponents: 'bower_components',
  webapp: "src/main/javascript",
  dist: "www",
  temp: "temp",
    root: "src",
  ui5ResourceFolder: "resources",
  lintReport: "target"
};

gulp.task('copyUI5resToRoot', function() {
    var ui5FilesToCopy = [
        config.bowerComponents + '/openui5-sap.m/resources/**',
        config.bowerComponents + '/openui5-sap.ui.core/resources/**',
        config.bowerComponents + '/openui5-sap.ui.layout/resources/**',
        config.bowerComponents + '/openui5-sap.ui.table/resources/**',
        config.bowerComponents + '/openui5-sap.ui.unified/resources/**',
        config.bowerComponents + '/openui5-sap.tnt/resources/**',
        config.bowerComponents + '/openui5-themelib_sap_belize/resources/**'
    ];

    return gulp.src(ui5FilesToCopy).pipe(plugins.copy(config.root + '/' + config.ui5ResourceFolder, {prefix: 3}));
});

gulp.task('makeWar', function(cb) {
  plugins.runSequence('clean','copyUI5res', 'copyResToDev', 'war', cb);
});

gulp.task('war', function () {
  gulp.src(config.root + '/**/*.*')
    .pipe(plugins.war({
      welcome: 'index.html',
      displayName: 'Promo Graph Editor'
    }))
    .pipe(plugins.zip('app-' + version + '.war'))
    .pipe(gulp.dest("./"));
});

