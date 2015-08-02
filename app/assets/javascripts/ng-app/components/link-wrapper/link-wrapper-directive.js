(function() {

  function linkWrapper() {

    return {
      restrict: 'EA',
      scope: {
        link: '=',
        listOfLinks: '=',
        basket: '='
      },
      templateUrl: 'ng-app/components/link-wrapper/link-wrapper.html',
      link: function( scope, $ele, $attrs ) {

        scope.page = $attrs.type;

        scope.showDeleteLinkModal = false;

      }

    }
    
  }

  angular
    .module('linkWrapperDirective', ['popupDeleteLinkModal'])
    .directive('linkWrapper', linkWrapper)

})()