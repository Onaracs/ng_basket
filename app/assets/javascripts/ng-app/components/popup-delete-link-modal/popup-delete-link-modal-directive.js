angular.module('popupDeleteLinkModal', [])
  .directive('popupDeleteLinkModal', ['$http', function($http
  ) {

    return {
      restrict: 'EA',
      scope: {
        showDeleteLink: '=', // for html file
        linkId: '=',
        basketId: '=',
        linkTitle: '=',
        links: '='
      },
      templateUrl: 'ng-app/components/popup-delete-link-modal/popup-delete-link-modal.html',
      link: function( scope, $ele, $attrs ) {

        // console.log(scope);
        scope.deleteLink = function(basketID, linkID) {

          scope.showDeleteLink = false;

          var promise = $http({
            url: '/links/' + linkID,
            method: 'DELETE',
            params: {
              basketID: basketID,
              linkID: linkID
            }
          }).success(function(response) {

            scope.links = response;

          }).error(function(response) {

            return {'status': false};

          })

        } // deleteLink()

      } // link

    } // return

  }])