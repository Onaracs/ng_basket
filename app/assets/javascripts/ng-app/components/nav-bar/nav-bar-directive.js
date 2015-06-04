angular.module('NavBar', [])
  .directive('navBar', [function navBar() {

  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'ng-app/components/nav-bar/nav-bar.html'
  }

}]);