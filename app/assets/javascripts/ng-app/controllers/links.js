angular.module('LinkCtrl', [
  'getBaskets',
  'popupDeleteBasketModal',
  'popupDeleteLinkModal',
  'basketFollowersSection',
  'linkWrapperDirective'
])

.controller('LinkCtrl', ['$stateParams', '$scope', '$http', '$state', 'getBasketInfo', function(
  $stateParams,
  $scope,
  $http,
  $state,
  getBasketInfo
) {

  $scope.showDeleteBasketModal = false;

  $scope.basketID = $stateParams.basketID;

  getBasketInfo($stateParams.basketID).then(function(response) {

    $scope.info = response.data.info;
    $scope.owner = response.data.owner;
    $scope.followers = response.data.followers;
    $scope.links = response.data.links;

  })

}])