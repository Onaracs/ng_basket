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
        
        console.log( scope );
        console.log('You about to join dis basket!');

        var promise = $http({
          url: 'http://localhost:3000/join_baskets',
          dataType: 'json',
          method: 'POST',
          params: {
            userID: scope.userId,
            basketID: scope.basketId
          },
          headers: {'Content-Type': 'application/json'}
        }).success(function(response) {
          
          console.log(response);          
          // $scope.baskets.push(response);
          
          // $scope.showForm = false;
          // return $scope.baskets;

        }).error(function(response) {

          return {'status': false};

        })

      }

    } // link
  }

}]);