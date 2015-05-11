angular.module('LinkCtrl', ['getBaskets'])

.controller('LinkCtrl', ['$stateParams', '$scope', '$http', '$state', 'getLinkstoBasket', function(
  $stateParams,
  $scope,
  $http,
  $state,
  getLinkstoBasket
) {

  $scope.basketName = $stateParams.basketName;
  $scope.basketID = $stateParams.basketID;

  getLinkstoBasket($stateParams.basketID).then(function(response) {
    
    $scope.links = response.data;

  });

  $scope.deleteBasket = function(basketID) {

    console.log(basketID);

    var promise = $http({
      url: 'http://localhost:3000/folders/' + basketID,
      // dataType: 'json',
      method: 'DELETE',
      params: {
        basketID: basketID
      }
      // headers: {'Content-Type': 'application/json'}
    }).success(function(response) {
      
      $state.go('basket.shared');
      // NEED TO REMOVE BASKET FROM LIST!
      console.log(response);
      console.log($scope.baskets);
      return $scope.baskets;

    }).error(function(response) {

      return {'status': false};

    })

  }

  $scope.deleteLink = function(linkID) {

    console.log(linkID);

  }

}])