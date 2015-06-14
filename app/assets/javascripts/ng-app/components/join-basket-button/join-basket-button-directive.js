angular.module('joinBasketButton', [])
  .directive('joinBasketButton', ['$http', function joinBasketButton( $http ) {

  return {
    restrict: 'EA',
    scope: {
      userId: '=',
      basketId: '='
    },
    templateUrl: 'ng-app/components/join-basket-button/join-basket-button.html',
    link: function ( scope, $ele, $attrs ) {
      
      scope.joinBasket = function() {



      }

    } // link
  }

}]);