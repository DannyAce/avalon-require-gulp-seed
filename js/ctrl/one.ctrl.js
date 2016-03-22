define(['modelFactory'],
  function(modelFactory) {


    var model = modelFactory.getModel("getGames");

    var viewModel = avalon.define({
      $id: 'oneCtrl',
      name: 'test1',
      goList: function() {
        avalon.router.go("boot.list", {
          id: 1
        });
      }
    })

    var render = function() {
      model.$post().then(function(data) {
        viewModel.name = "test2";
      }, function() {
        viewModel.name = "test4";
      })
    }


    return avalon.controller(function($ctrl) {
      $ctrl.$onRendered = function() {
    render();
        
      }
        //params为URL参数
      $ctrl.$onEnter = function(params) {}
      $ctrl.$onBeforeUnload = function() {

        }
        // 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
      $ctrl.$vmodels = []
    })
  })