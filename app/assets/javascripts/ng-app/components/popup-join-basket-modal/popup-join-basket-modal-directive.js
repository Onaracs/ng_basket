angular.module('popupJoinBasketModal', [])
  .directive('popupJoinBasketModal', ['$http', function( $http 
  ) {

    return {
      restrict: 'EA',
      scope: {
        showJoinModal: '=', // for html file
        userId: '=',
        basketId: '='
      },
      templateUrl: 'ng-app/components/popup-join-basket-modal/popup-join-basket-modal.html',
      link: function( scope, $ele, $attrs ) {
        
        scope.joinBasket = function() {

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
        
            // $scope.baskets.push(response);
            scope.showJoinModal = false;
            
            // $scope.showForm = false;
            // return $scope.baskets;

          }).error(function(response) {

            return {'status': false};

          })

        } // joinBasket()

      } // link

    } // return

  }])