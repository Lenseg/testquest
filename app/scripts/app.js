'use strict';

/**
 * @ngdoc overview
 * @name testquestApp
 * @description
 * # testquestApp
 *
 * Main module of the application.
 */
angular
  .module('testquestApp', [
    'ngAnimate',
    'ngAria',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
