angular.module('popupJoinBasketModal', [])
  .directive('popupJoinBasketModal', ['$http', function($http
  ) {

    return {
      restrict: 'EA',
      scope: {
        showDeleteLink: '=', // for html file
        linkId: '=',
        basketId: '=',
        linkTitle: '=',
        links: '='
      },
      templateUrl: 'ng-app/components/popup-join-basket-modal/popup-join-basket-modal.html',
      link: function( scope, $ele, $attrs ) {

        
        scope.joinBasket = function() {



          }

      } // delete link
    }


  }])