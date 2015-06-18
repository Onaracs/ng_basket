angular.module('LinkCtrl', [
  'getBaskets',
  'popupDeleteBasketModal',
  'popupDeleteLinkModal'
])

.controller('LinkCtrl', ['$stateParams', '$scope', '$http', '$state', 'getBasketInfo', 'getLinkstoBasket', function(
  $stateParams,
  $scope,
  $http,
  $state,
  getBasketInfo,
  getLinkstoBasket
) {

  $scope.showDeleteBasketModal = false;
  $scope.showDeleteLinkModal = false;

  $scope.basketName = $stateParams.basketName;
  $scope.basketID = $stateParams.basketID;

  getBasketInfo($stateParams.basketID).then(function(response) {

    console.log(response);
    $scope.links = response.data.links;

  })

}])