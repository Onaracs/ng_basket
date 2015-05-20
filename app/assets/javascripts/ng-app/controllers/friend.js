angular.module('FriendCtrl', [
  'getFriends'
])

.controller('FriendCtrl', ['$scope', 'getUsersFriends', 'getFriendsBaskets', function(
  $scope,
  getUsersFriends,
  getFriendsBaskets
) {

  getUsersFriends().then(function(response) {

    $scope.friends = response.data;

  })

  $scope.getFriendsBaskets = function(friendID) {

    // console.log(friendID);
    // $scope.friendID = friendID;
    getFriendsBaskets(friendID).then(function(response) {

      console.log(response);
      $scope.friendBaskets = response;

    })

  }

}])