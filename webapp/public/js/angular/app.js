// Elsen App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'elsen' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'elsen.services' is found in services.js
// 'elsen.controllers' is found in controllers.js
angular.module('elsen', ['ui.router', 'elsen.services', 'elsen.controllers', 'elsen.directives', 'elsen.filters', 'highcharts-ng', 'angularMoment'])

.config(function($stateProvider, $urlRouterProvider) {

// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
$stateProvider

	.state('hello', {
		url: "/hello",
		templateUrl: "/hello.html",
		controller: 'helloCtrl'
	})
	
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('hello');

});

