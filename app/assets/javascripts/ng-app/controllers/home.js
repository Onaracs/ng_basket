angular.module('HomeCtrl', ['getBaskets'])

.controller('HomeCtrl', ['$scope', '$http', 'getUsersBaskets', function(
  $scope,
  $http,
  getUsersBaskets
) {

  console.log('firing home controller');
  // Make call to Rails API to get a list of the users baskets
  getUsersBaskets().then(function(result) {

    $scope.baskets = result.data;

  });

}])