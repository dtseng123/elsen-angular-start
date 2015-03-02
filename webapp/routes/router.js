var cors		= require('cors');

//
// now the parts that actually do something
//

module.exports = function(app) {

	// home page
	app.get('/', function(req, res){ res.render('landing'); });

	//
	// error pages
	//
	
	app.get('/401', function(req, res){
		res.render('401');
	});
	
	//
	// these must be the last routes to work properly
	//
	
	app.post('*', function(req, res){ res.render('404'); });
	app.get('*', function(req, res){ res.render('404'); });

};
