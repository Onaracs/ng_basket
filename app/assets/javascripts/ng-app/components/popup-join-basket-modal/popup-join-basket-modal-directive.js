angular.module('popupJoinBasketModal', [])
  .directive('popupJoinBasketModal', ['$http', function($http
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

        console.log(scope);
        
        scope.joinBasket = function() {

          console.log('oh you joining dis basket allllright');

          }

      } // link

    } // return

  }])