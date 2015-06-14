angular.module('FriendBasketLinkCtrl', [
  'getBaskets',
  'currentUser',
  'joinBasketButton',
  'popupJoinBasketModal'
])

.controller('FriendBasketLinkCtrl', ['$rootScope', '$stateParams', '$scope', 'getLinkstoBasket', 'getCurrentUser', function(
  $rootScope,
  $stateParams,
  $scope,
  getLinkstoBasket,
  getCurrentUser
) {

  $scope.basketName = $stateParams.basketName;
  $scope.basketID = $stateParams.basketID;

  $scope.showJoinModal = false;

  getCurrentUser().then(function(response) {

    $scope.user = response.data;

  })
  
  getLinkstoBasket($stateParams.basketID).then(function(response) {
    
    $scope.friendBasketsLinks = response.data;

  });

}])