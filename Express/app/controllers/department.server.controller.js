var Department = require('mongoose').model('Department');

var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

exports.create = (req, res, next) => {
	var department = new Department(req.body);

	department.save((err) => {
		if (err) return res.status(400).send({ message: getErrorMessage(err) });
		else res.json(department);
	});

};

exports.list = (req, res, next) => {
	Department.find({}, (err, departments) => {
		if (err) return res.status(400).send({ message: getErrorMessage(err) });
		else res.json(departments);
	});
};
