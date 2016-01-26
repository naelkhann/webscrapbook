var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
		
		$routeProvider

		.when('/', {
			templateUrl: 'pages/home.htm',
			controller: 'mainController'
		})

		.when('/forecast', {
			templateUrl: 'pages/forecast.htm',
			controller: 'forecastController'
		})
		//$locationProvider.html5Mode(true);

});

weatherApp.controller("mainController", ['$scope', function($scope){

}]);

weatherApp.controller("forecastController", ['$scope', function($scope){

}]);

