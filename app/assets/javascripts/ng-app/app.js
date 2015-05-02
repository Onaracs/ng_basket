angular
  .module('ngApp', [
    'ngAnimate',
    'ui.router',
    'templates',
    'HomeCtrl'
])
  .config(function(
    $stateProvider,
    $urlRouterProvider,
    // $locationProvider,
    $httpProvider) {


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      })


    // enable HTML5 mode for SEO
    // $locationProvider.html5Mode(true);
})