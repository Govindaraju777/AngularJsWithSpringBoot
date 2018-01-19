'use strict';

/**
 * LoginController
 * @constructor
 */
App.controller("LoginController" , function($scope, $http) {
    /*
      
     $scope.login = function() {
        $http.get('/login').success(function(carList){
            $scope.cars = carList;
        });
    };
    $scope.login();
    */
	 $scope.setDummyUser = function() {
	    $scope.userName = "Govin";
	    $scope.password = "********";
	};
	$scope.setDummyUser();
});