(function() {

  function basketInfoBox() {

    return {
      restrict: 'E',
      scope: {
        followers: '='
      },
      templateUrl: 'ng-app/components/baskets-info-box/baskets-info-box.html',
    } // return    

  }
  
  angular
    .module('basketsInfoBox', [])
    .directive('basketsInfoBox', basketInfoBox)

})();