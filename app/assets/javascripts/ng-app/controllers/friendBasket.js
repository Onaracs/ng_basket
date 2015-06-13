angular.module('FriendBasketCtrl', [
  'getFriends'
])

.controller('FriendBasketCtrl', ['$stateParams', '$scope', 'getFriendsBaskets', 'getLinkstoBasket', function(
  $stateParams,
  $scope,
  getFriendsBaskets,
  getLinkstoBasket
) {

  console.log($scope);
  console.log($stateParams);

    // console.log(friendID);
    // $scope.friendID = friendID;
  getFriendsBaskets($stateParams.friendID).then(function(response) {

    $scope.friendBaskets = response.data;
    console.log($scope);

  })


  $scope.getLinkstoBasket = function(basketName, basketID) {

    $scope.basketName = basketName;
    
    getLinkstoBasket(basketID).then(function(response) {
      
      $scope.friendBasketsLinks = response.data;

    });
    
  }

}])