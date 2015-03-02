
/**
 * Module dependencies.
 */

var express		= require('express')
  , http		= require('http')
  , path		= require('path')
  , engines 	= require('consolidate')
  , app			= express()
  , server		= require('http').createServer(app);

var MemoryStore		= express.session.MemoryStore;
var sessionStore	= new MemoryStore();

// all environments
//app.set('port', process.env.PORT || 3000);
server.listen(3000);
app.set('views', __dirname + '/views');

app.engine('html', engines.ejs);	// use ejs for html (cause we use ejs within nearly all html files)
app.engine('jade', engines.jade);	// use jade for jade
app.set('view engine', 'html');		// .html as default view extension

app.configure('development', function(){
	app.use(express.logger('dev'));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('test', function(){
	app.use(express.logger());
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
	app.use(express.logger());
	app.use(express.errorHandler({}));
});

app.configure(function(){

	app.locals.pretty = true;
	app.use(express.favicon());
	app.use(express.bodyParser());		// get information from html forms
	app.use(express.cookieParser());	// read cookies (needed for auth)
	app.use(express.session({
		store: sessionStore,
		secret: 'really cool hippos are stealthy ninjas',
		key: 'connect.sid'
	}));
		
	app.use(express.methodOverride());	
	//app.use(require('stylus').middleware({ src: __dirname + '/public' }));
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(app.router);
});

require('./routes/router.js')(app); // load our routes and pass in our app and fully configured passport

//console.log( 'Express server listening on port %d in %s mode', server.address().port, app.settings.env );
console.log( 'Express server listening on port %d in %s mode', server.address().port, app.settings.env );
