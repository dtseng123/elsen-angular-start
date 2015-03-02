
//
// big 'ol environmental variables
//

var env = 'DEV';	// 'LOCAL' || 'DEV' || 'PROD'

var servers = {
	'LOCAL'		: 'https://localhost:3000',
	'DEV'		: 'https://api.elsen.co',
	'PROD'		: 'https://api.elsen.co'
}

var serverAddress = servers[ env ];