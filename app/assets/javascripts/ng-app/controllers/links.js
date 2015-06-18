angular.module('LinkCtrl', [
  'getBaskets',
  'popupDeleteBasketModal',
  'popupDeleteLinkModal'
])

.controller('LinkCtrl', ['$stateParams', '$scope', '$http', '$state', 'getBasketInfo', function(
  $stateParams,
  $scope,
  $http,
  $state,
  getBasketInfo
) {

  $scope.showDeleteBasketModal = false;
  $scope.showDeleteLinkModal = false;

  $scope.basketID = $stateParams.basketID;

  getBasketInfo($stateParams.basketID).then(function(response) {

    console.log(response);
    $scope.followers = response.data.followers;
    $scope.links = response.data.links;

  })

}])