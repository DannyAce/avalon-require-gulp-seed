require(['bootstrap', 'avalon', 'domReady!', 'mmRouter', 'mmHistory', 'mmPromise', 'mmState', 'jquery', 'headerCtrl'], function(bootstrap, avalon) {
  //定义顶层的VM
  avalon.define({
    $id: 'root'
  });
  // 定义一个顶层的vmodel，用来放置全局共享数据
  var root = avalon.define("root", function(vm) {
      vm.page = ""
    })
    //定义各种状态，内部会转换为一个路由表，交由mmRouter去处理
  avalon
    .state('boot', {
      url: "/",
      abstract: true,
      views: {
        "bootView": {
          templateUrl: "js/template/boot.tpl.html", // 指定模板
          controllerUrl: "js/ctrl/boot.ctrl.js" // 指定控制器地址
        }
      }
    })
    .state('boot.list', {
      url: "list/{id}",
      views: {
        "rightView": {
          templateUrl: "js/template/list.tpl.html", // 指定模板
          controllerUrl: "js/ctrl/list.ctrl.js" // 指定控制器地址
        }
      }
    })
    .state('boot.one', {
      url: "one",
      views: {
        "rightView": {
          templateUrl: "js/template/one.tpl.html", // 指定模板
          controllerUrl: "js/ctrl/one.ctrl.js" // 指定控制器地址
        }
      }
    })
    .state('boot.two', {
      url: "two",
      views: {
        "rightView": {
          templateUrl: "js/template/two.tpl.html", // 指定模板
          controllerUrl: "js/ctrl/two.ctrl.js" // 指定控制器地址
        }
      }
    })
     .state('boot.three', {
      url: "three",
      views: {
        "rightView": {
          templateUrl: "js/template/three.tpl.html", // 指定模板
          controllerUrl: "js/ctrl/three.ctrl.js" // 指定控制器地址
        }
      }
    });
  avalon.state.config({
    onLoad: function(oldState, newState) {

    },
    onViewEnter: function(newNode, oldNode) {

    },
    onError: function() {
        debugger;
        console.log(arguments)
      } // 强烈打开错误配置
  })

  avalon.history.start();
  avalon.scan()
});