/**
 * Created by danny zou on 16/3/21.
 */
/**
 * example:
 * var model = modelFactory.getModel("getGames");
 *  model.$post().then(function(data) {
 *      console.log('success');
 *      }, function() {
 *        console.log('error');
 *      })
 */

define(['config'],
  function(config) {


    var modelFactory = {}

    registerModel("getGames", {
      url: "QueryGameData/getGames"
    })
    registerModel("searchStadium", {
      url: "BaseData/searchStadium"
    })


    function registerModel(key, fns) {
      if (modelFactory[key]) {
        return;
      }

      modelFactory[key] = fns;
    }

    function getModel(modelName) {
      function ajax(type, data) {
        var head = config.head;

        var dtd = $.Deferred();

        var requestUrl = config.requestEnv + modelFactory[modelName].url;

        var param = {
          head: head,
          body: data || {}
        }
        $.ajax({
          type: type,
          url: requestUrl,
          data: JSON.stringify(param),
          contentType: "text/plain; charset=UTF-8",
          success: function(data) {
            //只有code=0才被当做success，否则做error callback
            if (data && data.code == 0) {
              try {
                data = JSON.parse(data);
              } catch (e) {}
              dtd.resolve(data);
            } else {
              dtd.reject(data);
            }
          },
          error: function(data) {
            dtd.reject(data);
          }
        });
        return dtd.promise();
      }
      return {
        $get: function(data) {
          return ajax("GET", data);
        },
        $post: function(data) {
          return ajax("POST", data);
        }
      }
    }
    return {
      getModel: getModel
    }
  })