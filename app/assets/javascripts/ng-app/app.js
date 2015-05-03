angular
  .module('ngApp', [
    'ngAnimate',
    'ui.router',
    'templates',
    'HomeCtrl',
    'LinkCtrl',
    'getBaskets'
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
        url: '/links/:basketID',
        templateUrl: 'links.html',
        controller: 'LinkCtrl'
      })


    // enable HTML5 mode for SEO
    // $locationProvider.html5Mode(true);
})