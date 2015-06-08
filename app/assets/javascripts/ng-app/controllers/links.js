angular.module('LinkCtrl', [
  'getBaskets',
  'popupDeleteModal'
])

.controller('LinkCtrl', ['$stateParams', '$scope', '$http', '$state', 'getLinkstoBasket', function(
  $stateParams,
  $scope,
  $http,
  $state,
  getLinkstoBasket
) {

  console.log($scope);
  $scope.showDeleteBasketModal = false;

  $scope.basketName = $stateParams.basketName;
  $scope.basketID = $stateParams.basketID;

  getLinkstoBasket($stateParams.basketID).then(function(response) {
    
    $scope.links = response.data;

  });

  $scope.deleteLink = function(basketID, linkID) {

    console.log(linkID);

      var promise = $http({
        url: 'http://localhost:3000/links/' + linkID,
        method: 'DELETE',
        params: {
          basketID, basketID,
          linkID: linkID
        }
      }).success(function(response) {

        $scope.links = response;

      }).error(function(response) {

        return {'status': false};

      })

    }

}])