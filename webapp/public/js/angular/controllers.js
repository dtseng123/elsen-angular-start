
angular.module('elsen.controllers', ['ui.bootstrap'])

//
// sample for tagEvent
//  LocalyticsService.tagEvent( 'action-complete',  _user.age, _user.gender, _user.score, 0 );
//

//
// walkthrough-login controller
.controller('helloCtrl', function( $scope, $state, MiscService ){
	
	var _params = {};
	_params['history'] = false;
	
	
	$scope.display = '';
	
	MiscService.getAPI( _params ).then( function( _res ){
		$scope.display = _res;
	});
	
});