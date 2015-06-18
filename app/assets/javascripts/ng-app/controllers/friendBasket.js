angular.module('FriendBasketCtrl', [
  'getFriends'
])

.controller('FriendBasketCtrl', ['$stateParams', '$scope', 'getFriendsBaskets', function(
  $stateParams,
  $scope,
  getFriendsBaskets
) {

  getFriendsBaskets($stateParams.friendID).then(function(response) {

    $scope.friendBaskets = response.data;

  });

}])