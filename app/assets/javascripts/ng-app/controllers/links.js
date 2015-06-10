angular.module('LinkCtrl', [
  'getBaskets',
  'popupDeleteBasketModal',
  'popupDeleteLinkModal'
])

.controller('LinkCtrl', ['$stateParams', '$scope', '$http', '$state', 'getLinkstoBasket', function(
  $stateParams,
  $scope,
  $http,
  $state,
  getLinkstoBasket
) {

  $scope.showDeleteBasketModal = false;
  $scope.showDeleteLinkModal = false;

  $scope.basketName = $stateParams.basketName;
  $scope.basketID = $stateParams.basketID;

  getLinkstoBasket($stateParams.basketID).then(function(response) {
    
    $scope.links = response.data;

  });

}])