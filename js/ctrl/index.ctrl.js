define([],
  function() {
    var viewModel = avalon.define({
      $id: 'indexCtrl',
      count: 1,
      goList: function() {
        avalon.router.go("list");
      },
      add: function() {
        viewModel.count=viewModel.count+1;
      }
    })

    return avalon.controller(function($ctrl) {
      $ctrl.$onRendered = function() {}
      $ctrl.$onEnter = function() {}
      $ctrl.$onBeforeUnload = function() {

        }
        // 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
      $ctrl.$vmodels = []
    })
  })