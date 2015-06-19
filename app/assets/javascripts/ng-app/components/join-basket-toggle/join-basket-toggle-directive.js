angular.module('joinBasketToggle', ['popupJoinBasketModal'])
  .directive('joinBasketToggle', function() {

    var checkJoinStatus = function() {

      var url = '';

      var promise = $http({
        url: url,
        params: {basketID: basketID},
        method: 'GET'
      }).success(function(response) {

        return response;

      }).error(function(response) {

        return {'status':false};

      })

      return promise;

    }

    return {
      restrict: 'E',
      scope: {
        followers: '=',
        user: '=',
        showJoinModal: '='
      },
      templateUrl: 'ng-app/components/join-basket-toggle/join-basket-toggle.html',
      link: function( scope, $ele, $attrs ) {

        // console.log(scope);
        // array = _.map(scope.followers, function(follower) {

        //   return follower.id;

        // })

        // console.log(array);
        // see if user is already joined here!

      } // link

    } // return

  })