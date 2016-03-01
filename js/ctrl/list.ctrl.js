define([],
  function() {
    var viewModel = avalon.define({
      $id: 'listCtrl',
      list: "list",

    })

    return avalon.controller(function($ctrl) {
      $ctrl.$onRendered = function() {

      }
      $ctrl.$onEnter = function() {}
      $ctrl.$onBeforeUnload = function() {

        }
        // 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
      $ctrl.$vmodels = []
    })
  })