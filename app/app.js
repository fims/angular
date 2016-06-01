'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/pilot', {
        templateUrl: 'pilot/pilot.html',
        controller: 'PilotCtrl',
        controllerAs: 'pilot'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
