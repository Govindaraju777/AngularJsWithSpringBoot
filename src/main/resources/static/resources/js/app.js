'use strict';

var AngularSpringApp = {};

var App = angular.module('AngularSpringBootApp', ['AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {
    
	//CarController - we send Request to- /cars/layout(templateUrl) 
	//CarController - returns html- /resources/html/cars/layout.html
	$routeProvider.when('/cars', {
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

    
  
    
  //CarController - we send Request to- /cars/layout(templateUrl) 
	//CarController - returns html- /resources/html/cars/layout.html
	$routeProvider.when('/login', {
		templateUrl: '/auth/login',
        controller: 'LoginController'
    });
    
    
    $routeProvider.otherwise({redirectTo: '/login'});
    //$routeProvider.otherwise({redirectTo: '/cars'});
    
    
}]);
