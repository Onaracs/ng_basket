angular.module('FriendCtrl', [
  'getFriends',
  'getBaskets'
])

.controller('FriendCtrl', ['$scope', 'getUsersFriends', 'getFriendsBaskets', 'getLinkstoBasket', function(
  $scope,
  getUsersFriends,
  getFriendsBaskets,
  getLinkstoBasket
) {

  getUsersFriends().then(function(response) {

    $scope.friends = response.data;

  })

  $scope.getFriendsBaskets = function(friendID) {

    // console.log(friendID);
    // $scope.friendID = friendID;
    getFriendsBaskets(friendID).then(function(response) {

      $scope.friendBaskets = response.data;

    })

  }

  $scope.getLinkstoBasket = function(basketName, basketID) {

    $scope.basketName = basketName;
    
    getLinkstoBasket(basketID).then(function(response) {
      
      $scope.friendBasketsLinks = response.data;

    });
    
  }

}])