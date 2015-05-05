angular.module('SharedLinkCtrl', [
  'getLinks'
])

.controller('SharedLinkCtrl', ['$scope', 'usersInbox', function(
  $scope,
  usersInbox
) {

  usersInbox().then(function(response) {

    console.log(response);
    $scope.sharedLinks = response.data;

  })


}])