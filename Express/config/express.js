var config           = require('./config'),
    express          = require('express'),
    morgan           = require('morgan'),
    compress         = require('compression'),
    bodyParser       = require('body-parser'),
    cors             = require('cors');

module.exports = () => {
	var app = express();

	app.use(cors());

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else {
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	require('../app/routes/employee.server.routes.js')(app);
	require('../app/routes/department.server.routes')(app);

	return app;	
};