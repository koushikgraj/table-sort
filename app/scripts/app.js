'use strict';

/**
 * @ngdoc overview
 * @name rackspaceApp
 * @description
 * # rackspaceApp
 *
 * Main module of the application.
 */
angular
  .module('rackspaceApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
