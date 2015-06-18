angular.module('FriendBasketLinkCtrl', [
  'getBaskets',
  'currentUser',
  'joinBasketToggle'
])

.controller('FriendBasketLinkCtrl', ['$rootScope', '$stateParams', '$scope', 'getBasketInfo', 'getCurrentUser', function(
  $rootScope,
  $stateParams,
  $scope,
  getBasketInfo,
  getCurrentUser
) {

  $scope.basketName = $stateParams.basketName;
  $scope.basketID = $stateParams.basketID;

  $scope.showJoinModal = false;

  getCurrentUser().then(function(response) {

    $scope.user = response.data;

  })

  getBasketInfo($stateParams.basketID).then(function(response) {

    console.log(response);

  })

}])