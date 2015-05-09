angular.module('LinkCtrl', ['getBaskets'])

.controller('LinkCtrl', ['$stateParams', '$scope', 'getLinkstoBasket', function(
  $stateParams,
  $scope,
  getLinkstoBasket
) {


  $scope.basketName = $stateParams.basketName;
  $scope.basketID = $stateParams.basketID;

  getLinkstoBasket($stateParams.basketID).then(function(response) {
    
    $scope.links = response.data;

  });

  $scope.deleteBasket = function(basketID) {

    console.log(basketID);

  }

  $scope.deleteLink = function(linkID) {

    console.log(linkID);

  }

}])