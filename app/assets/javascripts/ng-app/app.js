angular
  .module('ngApp', [
    'ngAnimate',
    'ui.router',
    'templates',
    'BasketCtrl',
    'LinkCtrl',
    'SharedLinkCtrl',
    'FriendCtrl',
    'NavBar'
])
  .config(function(
    $stateProvider,
    $urlRouterProvider,
    // $locationProvider,
    $httpProvider) {


    $urlRouterProvider.otherwise('shared');

    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'
      })
      .state('basket', {
        url: '/',
        templateUrl: 'baskets.html',
        controller: 'BasketCtrl'
      })
      .state('basket.links', {
        url: 'links/:basketName/:basketID',
        templateUrl: 'links.html',
        controller: 'LinkCtrl'
      })
      .state('basket.shared', {
        url: 'shared',
        templateUrl: 'shared_links.html',
        controller: 'SharedLinkCtrl'
      })
      .state('friends', {
        url: '/friends',
        templateUrl: 'friends.html',
        controller: 'FriendCtrl'
      })

    // enable HTML5 mode for SEO
    // $locationProvider.html5Mode(true);
})