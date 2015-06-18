angular.module('JoinBasketToggle', ['popupJoinBasketModal'])
  .directive('JoinBasketToggle', function() {

    return {
      restrict: 'E',
      scope: {
        showJoinModal: '='
      },
      templateUrl: 'ng-app/components/join-basket-toggle/join-basket-toggle.html',
      link: function( scope, $ele, $attrs ) {


      } // link

    } // return

  })