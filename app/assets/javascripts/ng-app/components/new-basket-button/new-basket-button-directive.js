(function() {

  function newBasketButton() {

    return {
      restrict: 'EA',
      scope: {
        showForm: '='
      },
      templateUrl: 'ng-app/components/new-basket-button/new-basket-button.html'
    }

  }

  angular
    .module('newBasketButtonDirective', [])
    .directive('newBasketButton', newBasketButton)

})