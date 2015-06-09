angular.module('popupDeleteBasketModal', [])
  .directive('popupDeleteBasketModal', ['$http', '$state', function(
    $http,
    $state
  ) {

    return {
      restrict: 'EA',
      scope: {
        deleteBasket: '=', // for html file
        basketName: '=',
        basketId: '=',
        baskets: '='
      },
      templateUrl: 'ng-app/components/popup-delete-basket-modal/popup-delete-basket-modal.html',
      link: function( scope, $ele, $attrs ) {
        
        scope.delete = function(basketID) {

          var promise = $http({
            url: 'http://localhost:3000/folders/' + basketID,
            method: 'DELETE',
            params: {
              basketID: basketID
            }
          }).success(function(response) {
            
            console.log(response);
            scope.baskets = response;

            $state.go('basket.shared');

          }).error(function(response) {

            return {'status': false};

          })

        } // delete

      } // link
    }


  }])