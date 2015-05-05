angular.module('LinkCtrl', ['getBaskets'])

.controller('LinkCtrl', ['$stateParams', '$scope', 'getLinkstoBasket', function(
  $stateParams,
  $scope,
  getLinkstoBasket
) {

  console.log('In the links controller');
  console.log($stateParams);

  getLinkstoBasket($stateParams.basketID).then(function(response) {
    
    $scope.links = response.data;
    console.log($scope.links);

  });


}])