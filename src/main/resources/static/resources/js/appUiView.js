'use strict';

var AngularSpringApp = {};

var App = angular.module('AngularSpringBootApp', ['ui.router','ui.router.stateHelper','AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives']);

// Declare app level module which depends on filters, and services
App.config(['$stateProvider', function ($stateProvider) {
    
	//CarController - we send Request to- /cars/layout(templateUrl) 
	//CarController - returns html- /resources/html/cars/layout.html
	
	/*
	$stateProvider.when('/cars', {
        templateUrl: '/cars/layout',
        controller: 'CarController'
    });

    $routeProvider.when('/trains', {
        templateUrl: 'trains/layout',
        controller: 'TrainController'
    });
    
    $routeProvider.when('/railwaystations', {
        templateUrl: 'railwaystations/layout',
        controller: 'RailwayStationController'
    });
    
    */
    
  
    
  //CarController - we send Request to- /cars/layout(templateUrl) 
	//CarController - returns html- /resources/html/cars/layout.html
	/*
	$routeProvider.when('/login', {
		templateUrl: '/auth/login',
        controller: 'LoginController'
    });
	*/
	$stateProvider
	  .state('cars', {
		templateUrl: '/cars/layout',
	    controller: 'CarController'
	  });
	
	//$urlRouterProvider.otherwise("/login")
    
    
}]);
