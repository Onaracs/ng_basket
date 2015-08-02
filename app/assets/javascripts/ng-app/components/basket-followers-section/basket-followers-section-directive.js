(function() {

  function basketFollowersSection() {

    return {
      restrict: 'E',
      scope: {
        followers: '='
      },
      templateUrl: 'ng-app/components/basket-followers-section/basket-followers-section.html',
    } // return

  }

  angular
    .module('basketFollowersSection', [])
    .directive('basketFollowersSection', basketFollowersSection)

})();