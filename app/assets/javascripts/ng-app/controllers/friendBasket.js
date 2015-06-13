angular.module('FriendBasketCtrl', [
  'getFriends'
])

.controller('FriendBasketCtrl', ['$stateParams', '$scope', 'getFriendsBaskets', function(
  $stateParams,
  $scope,
  getFriendsBaskets,
  getLinkstoBasket
) {

  console.log($scope);

  getFriendsBaskets($stateParams.friendID).then(function(response) {

    $scope.friendBaskets = response.data;

  })


  $scope.getLinkstoBasket = function(basketName, basketID) {

    $scope.basketName = basketName;
    
    getLinkstoBasket(basketID).then(function(response) {
      
      $scope.friendBasketsLinks = response.data;

    });
    
  }

}])