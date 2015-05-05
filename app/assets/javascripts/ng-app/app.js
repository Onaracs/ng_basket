angular
  .module('ngApp', [
    'ngAnimate',
    'ui.router',
    'templates',
    'HomeCtrl',
    'LinkCtrl',
    'SharedLinkCtrl',
    'getBaskets',
    'getLinks'
])
  .config(function(
    $stateProvider,
    $urlRouterProvider,
    // $locationProvider,
    $httpProvider) {


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('basket', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      })
      .state('basket.links', {
        url: 'links/:basketID',
        templateUrl: 'links.html',
        controller: 'LinkCtrl'
      })
      .state('basket.shared', {
        url: 'shared',
        templateUrl: 'shared_links.html',
        controller: 'SharedLinkCtrl'
      })

    // enable HTML5 mode for SEO
    // $locationProvider.html5Mode(true);
})