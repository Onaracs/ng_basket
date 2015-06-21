angular.module('joinBasketToggle', ['popupJoinBasketModal'])
  .directive('joinBasketToggle', function() {

    var checkJoinStatus = function(followers) {

      console.log(followers);
      var followersIds = [];

      // use a .map in a refactor
      for (var i = 0; i < followers.length; i++) {

        followersIds.push(followers[i].id);

      }

      console.log(followersIds);
      return followersIds;

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

        checkJoinStatus(scope.followers);



        scope.unfollow = function() {

          console.log('this will unfollow basket');

        }

      } // link

    } // return

  })