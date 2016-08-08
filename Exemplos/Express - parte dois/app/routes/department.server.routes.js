var departments = require('../controllers/department.server.controller');

module.exports = (app) => {
	app.route('/api/departments')
		.get(departments.list)
		.post(departments.create);;
};
