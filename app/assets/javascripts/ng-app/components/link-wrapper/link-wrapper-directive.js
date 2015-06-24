angular.module('linkWrapperDirective', ['popupDeleteLinkModal'])
  .directive('linkWrapper', [function() {

    return {
      restrict: 'EA',
      scope: {
        link: '='
      },
      templateUrl: 'ng-app/components/link-wrapper/link-wrapper.html',
      link: function( scope, $ele, $attrs ) {

        scope.showDeleteLinkModal = false;

      }
    }

  }])