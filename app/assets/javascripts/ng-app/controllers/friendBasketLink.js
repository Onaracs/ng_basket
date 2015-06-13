angular.module('FriendBasketLinkCtrl', [
  'getBaskets',
  'currentUser',
  'joinBasketButton'
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

  getCurrentUser().then(function(response) {

    $scope.user = response.data;

  })
  
  getLinkstoBasket($stateParams.basketID).then(function(response) {
    
    $scope.friendBasketsLinks = response.data;

  });

}])