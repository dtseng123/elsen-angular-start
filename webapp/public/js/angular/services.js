
angular.module('elsen.services', [])

//
//
// Misc Factory
.factory('MiscService', function( $q, $state, $http ){

	return {
		getAPI: function( _params ){
		
			var deferred = $q.defer();
	
			// our $http call for interacting with the server to pull down data
			$http({	method: 'GET',
					url: 	serverAddress + '/v1/api',
					params: {
						history: _params.history
					}
				}).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
	
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
			
		},
		getAPIMetrics:  function( _params ){
		
			var deferred = $q.defer();
	
			// our $http call for interacting with the server to pull down data
			$http({	method: 'GET',
					url: 	serverAddress + '/v1/metrics',
					params: {
						history: _params.history
					}
				}).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					//	when the response is available
	
					// console.log( status + ', ' + data )
					// console.log( data )

					deferred.resolve( data );
	
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					// console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
			
		},
		getTOS:  function( _params ){
		
			var deferred = $q.defer();
	
			// our $http call for interacting with the server to pull down data
			$http({	method: 'GET',
					url: 	serverAddress + '/v1/misc',
					params: {
						history: _params.history
					}
				}).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					//	when the response is available
	
					// console.log( status + ', ' + data )
					// console.log( data )

					deferred.resolve( data );
	
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					// console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
			
		}
	}
	
})

//
//
// Apps Factory
.factory( 'AppsService', function ( $q, $state, $http ){
    return{
        
        //
        //Create App
        putApps: function ( _params ){
		
			var deferred = $q.defer();
	
			// our $http call for interacting with the server to pull down data
			$http({	method: 'PUT',
					url: 	serverAddress + '/v1/apps',
					params: {
						email: _params.email,
                        title: _params.title
					}
				}).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
	
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
			
		},
        
        //
        //Get all Apps
        getApps: function( _params ){
		
			var deferred = $q.defer();
	
			// our $http call for interacting with the server to pull down data
			$http({	method: 'GET',
					url: 	serverAddress + '/v1/apps',
					params: {
						token: _params.token
					}
				}).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
	
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
			
		},
    
        //
        //Get specific App
        getApp: function( _params ){
		
			var deferred = $q.defer();
	
			// our $http call for interacting with the server to pull down data
			$http({	method: 'GET',
					url: 	serverAddress + '/v1/apps/' + _params.appid,
					params: {
						token: _params.token
					}
				}).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
	
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
			
		},
        
        //
        //Delete specific App
        deleteApp: function( _params ){
		
			var deferred = $q.defer();
	
			// our $http call for interacting with the server to pull down data
			$http({	method: 'DELETE',
					url: 	serverAddress + '/v1/apps/' + _params.appid,
					params: {
						token: _params.token
					}
				}).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
	
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
			
		},
        
        //
        //Get All Strategies for specific App
        getAppStrategies: function( _params ){
		
			var deferred = $q.defer();
	
			// our $http call for interacting with the server to pull down data
			$http({	method: 'GET',
					url: 	serverAddress + '/v1/apps/' + _params.appid + '/strategies',
					params: {
						token: _params.token
					}
				}).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
	
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
			
		},
        
        //
        //Get All Backtests
        getAppBacktests: function( _params ){
		
			var deferred = $q.defer();
	
			// our $http call for interacting with the server to pull down data
			$http({	method: 'GET',
					url: 	serverAddress + '/v1/apps/' + _params.appid + '/backtests',
					params: {
						token: _params.token
					}
				}).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
	
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
			
		}
    }

})

//
//
// User Factory
.factory('UserService', function( $q, $state, $http ){
   
    return {
        putUser: function( _params ){
            
            var deferred = $q.defer();
        
            $http({ method: 'PUT',
                       url: serverAddress + '/v1/users',
                       params: _params
                   }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config ) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
        },
        getUsers: function( _params ){
            
            var deferred = $q.defer();
        
            $http({ method: 'GET',
                       url: serverAddress + '/v1/users',
                       params: {
                           app_id: _params.app_id
                       }
                   }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
	
			return deferred.promise;
        }
        
    }
    
})

//
//
// Access Factory
.factory('AccessService',function( $q, $state, $http ){
    
    return {
        getAccess: function( _params ){
            
            var deferred = $q.defer();
            
            $http({ method:'GET',
                  url: serverAddress + '/v1/access',
                  params:{
                        app_id: _params.app_id,
                        username: _params.username,
                        password: _params.password
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        }
   
    }

})

//
//
// Data Factory    
.factory('DataService',function( $q, $state, $http){
     
    return {
        getSources: function( _params ){
            
            var deferred = $q.defer();
            
            $http({ method:'GET',
                  url: serverAddress + '/v1/sources',
                  params:{
                        token: _params.token
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        },
        getFilters: function( _params ){
            
            var deferred = $q.defer();
            
            $http({ method:'GET',
                  url: serverAddress + '/v1/filters',
                  params:{
                        token: _params.token
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        },
        getIndicators: function( _params ){
            
            var deferred = $q.defer();
            
            $http({ method:'GET',
                  url: serverAddress + '/v1/indicators',
                  params:{
                        token: _params.token
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        },
        getBenchmarks: function( _params ){
            
            var deferred = $q.defer();
            
            $http({ method:'GET',
                  url: serverAddress + '/v1/benchmarks',
                  params:{
                        token: _params.token
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        },
        getIndices: function( _params ){
            
            var deferred = $q.defer();
            
            $http({ method:'GET',
                  url: serverAddress + '/v1/indices',
                  params:{
                        token: _params.token
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        },
        getExchanges: function( _params ){
            
            var deferred = $q.defer();
            
            $http({ method:'GET',
                  url: serverAddress + '/v1/exchanges',
                  params:{
                        token: _params.token
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        }
    
    }

})

//
//
// Strategy Factory
.factory('StrategyService',function ( $q, $state, $http ){
        
    return {
        
        putStrategy: function( _params ){
            
            var deferred = $q.defer();
            
            $http({ method:'PUT',
                  url: serverAddress + '/v1/strategies',
                  params:{
                        token: _params.token,
                        indicators: _params.indicators,
                        filters: _params.filters,
                        universe: _params.universe,
                        interval: _params.interval,
                        filters: _params.filters
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        },
        
        getStrategies: function( _params ){
            
            var deferred = $q.defer();
            
            $http({ method:'GET',
                  url: serverAddress + '/v1/strategies',
                  params:{
                        token: _params.token
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        }
   
    }
})

//
//
// Backtest Factory
.factory('BacktestService',function ( $q, $state, $http ){ 
    
    return {
        
        
        putBacktest: function( _params ){
            
            var deferred = $q.defer();
            
            $http({ method:'PUT',
                  url: serverAddress + '/v1/backtests',
                  params:{
                        token: _params.token,
                        strategy: _params.strategy,
                        start:_params.start,
                        end: _params.end,
                        title: _params.title,
                        tags: _params.tags
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        },
        
        getBacktests: function( _params ){
            
            var deferred = $q.defer();
            $http({ method:'GET',
                  url: serverAddress + '/v1/backtests',
                  params:{
                        token: _params.token
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        },
        
        getBacktestTrades: function( _params ){
            
            var deferred = $q.defer();
            $http({ method:'GET',
                  url: serverAddress + '/v1/backtests/' + _params.id + '/trades',
                  params:{
                        token: _params.token
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        },
        
        getBacktestMetrics: function( _params ){
            
            var deferred = $q.defer();
            $http({ method:'GET',
                  url: serverAddress + '/v1/backtests/' + _params.id + '/metrics',
                  params:{
                        token: _params.token
                  }
            }).
                success(function( data, status, headers, config ){
                    // this callback will be called asynchronously
					//	when the response is available
	
					console.log( status + ', ' + data )
					console.log( data )

					deferred.resolve( data );
                
            }).
                error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
	
					console.log( status + ', ' + data )
	
					if ( status == 401 ){
						$state.go('/401');
					}
	
				});
            return deferred.promise;
        }
    }
})


; //END Services