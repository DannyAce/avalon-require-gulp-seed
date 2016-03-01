require(['bootstrap', 'avalon', 'domReady!', 'mmRouter', 'mmHistory', 'mmPromise', 'mmState', 'jquery'], function(bootstrap, avalon) {
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
    .state('index', {
      url: "/",
      views: {
        "": {
          templateUrl: "js/template/index.tpl.html", // 指定模板
          controllerUrl: "js/ctrl/index.ctrl.js" // 指定控制器地址
        }
      }
    })
    .state('list', {
      url: "/list",
      views: {
        "": {
          templateUrl: "js/template/list.tpl.html", // 指定模板
          controllerUrl: "js/ctrl/list.ctrl.js" // 指定控制器地址
        }
      }
    });
  avalon.state.config({
    onError: function() {
        console.log(arguments)
      } // 强烈打开错误配置
  })

  avalon.history.start();
  avalon.scan()
});