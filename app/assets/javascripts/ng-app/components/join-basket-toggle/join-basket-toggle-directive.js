(function() {

  function joinBasketToggle( $http ) {

    var checkJoinStatus = function(user, followers) {

      var followersIds = [];

      // use a .map in a refactor
      for (var i = 0; i < followers.length; i++) {

        followersIds.push(followers[i].id);

      }

      var following = followersIds.indexOf(user.id) === -1 ? false : true

      return following;

    }

    return {
      restrict: 'E',
      scope: {
        followers: '=',
        user: '=',
        basket: '=',
        showJoinModal: '='
      },
      templateUrl: 'ng-app/components/join-basket-toggle/join-basket-toggle.html',
      link: function( scope, $ele, $attrs ) {

        console.log(scope);
        // very Hackey!!!
        // look to refactor
        scope.$watchGroup(['user', 'followers'], function(newVal, oldVal) {

          if ( newVal[0] != undefined && newVal[1] != undefined ) {

            scope.following = checkJoinStatus(newVal[0], scope.followers);

          }

        }) // $watchGroup

        scope.unfollow = function(userID, basketID) {

          var promise = $http({
            url: '/join_baskets/' + userID + basketID,
            method: 'DELETE',
            params: {
              userID: userID,
              basketID: basketID
            }
          }).success(function(response) {

            scope.following = false;

          }).error(function(response) {

            return {'status': false};

          })

        }

      } // link

    } // return

  }

  angular
    .module('joinBasketToggle', ['popupJoinBasketModal'])
    .directive('joinBasketToggle', ['$http', joinBasketToggle])

})();