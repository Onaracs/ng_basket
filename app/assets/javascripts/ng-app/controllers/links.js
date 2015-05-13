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
      method: 'DELETE',
      params: {
        basketID: basketID
      }
    }).success(function(response) {
      
      $scope.$parent.baskets = response;

      $state.go('basket.shared');

    }).error(function(response) {

      return {'status': false};

    })

  }

  $scope.deleteLink = function(linkID) {

    console.log(linkID);

  }

}])