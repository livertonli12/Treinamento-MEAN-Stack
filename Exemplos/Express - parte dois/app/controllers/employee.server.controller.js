var Employee = require('mongoose').model('Employee');

var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

exports.create = (req, res) => {
	var employee = new Employee(req.body);

	employee.save((err) => {
		if (err) return res.status(400).send({ message: getErrorMessage(err) });
		else res.json(employee);
	});

};

exports.list = (req, res) => {
	Employee.find({}, (err, employees) => {
		if (err) return res.status(400).send({ message: getErrorMessage(err) });
		else res.json(employees);
	});
};

exports.read = (req, res) => {
	res.json(req.employee);
};

exports.getById = (req, res, next, id) => {
	Employee.findOne({_id: id}, (err, employee) => {
		if (err) return next(err);
		if(!employee) return next(new Error('Failed to load employee ' + id));
		req.employee = employee;
		next();
	});
};

exports.update = (req, res, next) => {
	var employee = req.employee;
	employee.save((err) => {
		if (err) return res.status(400).send({ message: getErrorMessage(err) });
		res.json(employee);
	});
};

exports.delete = (req, res, next) => {
	var employee = req.employee;
	employee.remove((err) => {
		if (err) return res.status(400).send({ message: getErrorMessage(err) });
		res.json(employee);
	});
};

