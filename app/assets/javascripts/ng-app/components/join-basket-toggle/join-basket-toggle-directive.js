angular.module('joinBasketToggle', ['popupJoinBasketModal'])
  .directive('joinBasketToggle', function() {

    var checkJoinStatus = function(followers) {

      // console.log(followers);

      // followersIds = followers.map(function(follower) {

      //   return follower.id

      // })

      // console.log(followersIds);

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

        // checkJoinStatus(scope.followers);

        // scope.$watch('followers', function(newValue, oldValue) {

        //   followersIds = scope.followers.map(function(follower) {

        //     return follower.id

        //   })

        //   if (followersIds.indexOf(user.id) != -1) {

        //     scope.unfollow = true;

        //   } else {

        //     scope.follow = true;

        //   }

        // }, true)


        scope.unfollow = function() {

          console.log('this will unfollow basket');

        }

      } // link

    } // return

  })