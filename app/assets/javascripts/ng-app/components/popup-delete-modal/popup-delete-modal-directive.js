angular.module('popupDeleteModal', [])
  .directive('popupDeleteModal', ['$http', '$state', function(
    $http,
    $state
  ) {

    return {
      restrict: 'EA',
      scope: {
        deleteBasket: '=',
        basketName: '=',
        basketId: '=',
        baskets: '='
      },
      templateUrl: 'ng-app/components/popup-delete-modal/popup-delete-modal.html',
      link: function( scope, $ele, $attrs ) {

        scope.delete = function(basketID) {
          console.log('clicking the delete button');
          console.log(basketID);
          console.log(scope);

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