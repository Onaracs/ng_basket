angular.module('popupDeleteBasketModal', [])
  .directive('popupDeleteBasketModal', ['$http', '$state', function(
    $http,
    $state
  ) {

    return {
      restrict: 'EA',
      scope: {
        deleteBasket: '=', // for html file
        basketInfo: '=',
        baskets: '='
      },
      templateUrl: 'ng-app/components/popup-delete-basket-modal/popup-delete-basket-modal.html',
      link: function( scope, $ele, $attrs ) {

        console.log(scope);
        // scope.basketName = scope.basketInfo.name;
        // scope.basketID = scope.basketInfo.id;

        scope.delete = function(basketID) {

          var promise = $http({
            url: 'http://localhost:3000/folders/' + basketID,
            method: 'DELETE',
            params: {
              basketID: basketID
            }
          }).success(function(response) {
            
            scope.$apply(function() {

              console.log(response);
              scope.baskets = response;


            })
            $state.go('basket.shared');

          }).error(function(response) {

            return {'status': false};

          })

        } // delete

      } // link
    }


  }])