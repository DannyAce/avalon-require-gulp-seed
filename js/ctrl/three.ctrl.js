define(['modelFactory'],
  function(modelFactory) {

    var model = modelFactory.getModel("searchStadium");

    var viewModel = avalon.define({
      $id: 'threeCtrl',
      searchData: {
        keyword: "123"
      },
      results: [],
      search: function() {
        doSearch(viewModel.searchData.keyword);
      }
    })

    function doSearch(keyword) {
      var param = {
        stadiumName: keyword,
        sportType: 'basketball',
        showAll: 'N',
        lat: '',
        lng: '',
        pageSize: 50,
        pageIndex: 1
      };
      model.$post(param).then(function(res) {
        if (res && res.data && res.data.length > 0) {
          viewModel.results = res.data;
        } else {
          viewModel.results = [];
        }
      }, function() {})
    }


    return avalon.controller(function($ctrl) {
      $ctrl.$onRendered = function() {}
        //params为URL参数
      $ctrl.$onEnter = function(params) {}
      $ctrl.$onBeforeUnload = function() {

        }
        // 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
      $ctrl.$vmodels = []
    })
  })