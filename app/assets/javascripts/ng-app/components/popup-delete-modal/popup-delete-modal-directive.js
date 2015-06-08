angular.module('popupDeleteModal', [])
  .directive('popupDeleteModal', function() {

    return {
      restrict: 'EA',
      scope: {

      },
      templateUrl: 'ng-app/components/popup-delete-modal/popup-delete-modal.html',
      link: function( scope, $ele, $attrs ) {

      } // link
    }


  })