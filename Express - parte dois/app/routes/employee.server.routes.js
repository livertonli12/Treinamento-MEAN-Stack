var employees = require('../controllers/employee.server.controller');

module.exports = (app) => {
	app.route('/api/employees')
		.get(employees.list)
		.post(employees.create);

	app.route('/api/employees/:employeeId')
		.get(employees.read)
		.put(employees.update)
		.delete(employees.delete);

	app.param('employeeId', employees.getById);
};
