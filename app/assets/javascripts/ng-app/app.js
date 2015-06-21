angular
  .module('ngApp', [
    'ngAnimate',
    'ui.router',
    'templates',
    'BasketCtrl',
    'LinkCtrl',
    'SharedLinkCtrl',
    'FriendCtrl',
    'FriendBasketCtrl',
    'FriendBasketLinkCtrl',
    'NavBar',
    'currentUser'
])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function(
    $stateProvider,
    $urlRouterProvider,
    $httpProvider
) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/',
      templateUrl: 'about.html'
    })
    .state('basket', {
      url: '/baskets',
      templateUrl: 'baskets.html',
      controller: 'BasketCtrl'
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
    .state('friends', {
      url: '/friends',
      templateUrl: 'friends.html',
      controller: 'FriendCtrl'
    })
    .state('friends.baskets', {
      url: '/baskets/:friendID',
      templateUrl: 'friends-baskets.html',
      controller: 'FriendBasketCtrl'
    })
    .state('friends.baskets.links', {
      url: '/links/:basketName/:basketID',
      templateUrl: 'friends-baskets-links.html',
      controller: 'FriendBasketLinkCtrl'
    })
}])