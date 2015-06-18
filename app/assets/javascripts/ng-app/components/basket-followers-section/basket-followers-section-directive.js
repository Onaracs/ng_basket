angular.module('basketFollowersSection', [])
  .directive('basketFollowersSection', function() {

    return {
      restrict: 'E',
      scope: {
        followers: '='
      },
      templateUrl: 'ng-app/components/basket-followers-section/basket-followers-section.html',
    } // return

  })