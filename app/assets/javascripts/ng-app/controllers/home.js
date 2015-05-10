angular.module('HomeCtrl', ['getBaskets'])

.controller('HomeCtrl', ['$scope', '$http', 'getUsersBaskets', function(
  $scope,
  $http,
  getUsersBaskets
) {

  // Make call to Rails API to get a list of the users baskets
  getUsersBaskets().then(function(result) {

    $scope.baskets = result.data;

  });

  $scope.createBasket = function() {

    console.log($scope.newBasketName)

    console.log('this is creating a new basket');
    // get input type
    var promise = $http({
      url: 'http://localhost:3000/folders',
      dataType: 'json',
      method: 'POST',
      params: {
        name: $scope.newBasketName
      },
      headers: {'Content-Type': 'application/json'}
    }).success(function(response) {
      
      $scope.baskets.push(response);
      return $scope.baskets;

    }).error(function(response) {

      return {'status': false};

    })

  }; // createBasket()

}])