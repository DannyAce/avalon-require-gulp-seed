var gulp = require('gulp');
var rjs = require('requirejs');
var webserver = require('gulp-webserver');

gulp.task('server', function() {
  gulp.src('./')
    .pipe(webserver({
      port: 8400,
      livereload: false,
      open: false,
      middleware: [function(request, response, next) {
        if (request.url === '/') {
          request.url = '/d.html';
        }
        next();
      }]
    }));
});
gulp.task('serverdest', function() {
  gulp.src('./dest')
    .pipe(webserver({
      port: 8400,
      livereload: false,
      open: false,
      middleware: [function(request, response, next) {
        if (request.url === '/') {
          request.url = '/index.html';
        }
        next();
      }]
    }));
});

gulp.task('build', function(cb) {
  rjs.optimize({
    appDir: '.',
    baseUrl: "./js/",
    dir: 'dest/',
    urlArgs: "rel=" + (new Date()).getTime(),
    removeCombined: true,
    preserveLicenseComments: false,
    fileExclusionRegExp: /^Gruntfile.js$|^package.json$|^.idea$|^desttop.ini$|^d.html$|^readme.txt$|^web.config$|^node_modules$|.*\.scss|static|\.git$/,
    // optimize: "none",
    // "uglify": {
    //   "except": ["$vmodels", "$ctrl"]
    // },
    shim: {
      avalon: {
        exports: 'avalon'
      },
      'jquery': {
        exports: '$'
      },
      'bootstrap': {
        deps: ['jquery'],
        exports: 'bootstrap'
      },
      mmHistory: {
        deps: ['avalon'],
        exports: 'mmHistory'
      },
      mmPromise: {
        deps: ['avalon'],
        exports: 'mmPromise'
      },
      mmRouter: {
        deps: ['avalon', 'mmHistory'],
        exports: 'mmRouter'
      },
      mmState: {
        deps: ['avalon', 'mmPromise', 'mmRouter'],
        exports: 'mmState'
      },
      app: {
        deps: ['mmState'],
        exports: 'app'
      }
    },
    paths: {
      'avalon': 'libs/avalon/avalon.shim',
      'bootstrap': 'libs/bootstrap/js/bootstrap',
      'mmHistory': 'libs/avalon/mmHistory',
      'mmPromise': 'libs/avalon/mmPromise',
      'mmRouter': 'libs/avalon/mmRouter',
      'mmState': 'libs/avalon/mmState',
      'jquery': 'libs/jquery',
      'domReady': 'libs/domReady',
      "app": "app",
      'modelFactory': 'models/modelFactory',
      'config': 'base/config',
      "headerCtrl": "ctrl/header.ctrl"

    },
    modules: [{
      name: 'mini',
      create: true,
      include: [
        'avalon',
        'bootstrap',
        'mmHistory',
        'mmPromise',
        'mmRouter',
        'mmState',
        'jquery',
        'domReady',
        'app',
        'modelFactory',
        'config',
        'headerCtrl'
      ]
    }]
  }, function(buildResponse) {
    // console.log('build response', buildResponse);
    cb();
  }, cb);
});



gulp.task('default', ['server']);