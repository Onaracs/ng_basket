angular.module('basketFollowersSection', [])
  .directive('basketFollowersSection', function() {

    return {
      restrict: 'E',
      scope: {
        showJoinModal: '='
      },
      templateUrl: 'ng-app/components/basket-followers-section/basket-followers-section.html',
      link: function( scope, $ele, $attrs ) {

        // see if user is already joined here!

      } // link

    } // return

  })