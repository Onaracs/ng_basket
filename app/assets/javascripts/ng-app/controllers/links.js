angular.module('LinkCtrl', ['getBaskets'])

.controller('LinkCtrl', ['$stateParams', '$scope', 'getLinkstoBasket', function(
  $stateParams,
  $scope,
  getLinkstoBasket
) {

  getLinkstoBasket($stateParams.basketID).then(function(response) {
    
    $scope.links = response.data;

  });


}])