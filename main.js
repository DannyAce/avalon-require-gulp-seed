require.config({
  baseUrl: "/js/",
  //urlArgs: "rel=" + (new Date()).getTime(),
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

    //ctrl
    "headerCtrl": "ctrl/header.ctrl"

  },
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
  // kick start application
  deps: ['app']
});