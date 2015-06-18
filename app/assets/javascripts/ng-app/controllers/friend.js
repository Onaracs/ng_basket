angular.module('FriendCtrl', [
  'getFriends'
])

.controller('FriendCtrl', ['$scope', 'getUsersFriends', function(
  $scope,
  getUsersFriends
) {

  getUsersFriends().then(function(response) {

    $scope.friends = response.data;

  })


}])