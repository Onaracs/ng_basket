angular.module('NavBar', ['currentUser'])
  .directive('navBar', ['getCurrentUser', function navBar( getCurrentUser ) {

  return {
    restrict: 'EA',
    scope: {
      user: '='
    },
    templateUrl: 'ng-app/components/nav-bar/nav-bar.html',
    link: function ( scope, $ele, $attrs ) {

      getCurrentUser().then(function(result) {

        console.log(result.data);
        scope.user = result.data;

      })

      scope.chromeExtensionInstall = function() {
        console.log('install extension')
        // chrome.webstore.install()
      }

    }
  }

}]);