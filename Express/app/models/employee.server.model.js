var mongoose      = require('mongoose'),
    Schema        = mongoose.Schema;

var EmployeeSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, unique: true, required: true, match: [/.+\@.+\..+/, "Please fill a valid e-mail address"] },
	cellphone: { type: String, match: [/^\d{4,5}-\d{4}$/, "Please fill a valid cellphone"] },
	department: { type: String, required: true }
});

mongoose.model('Employee', EmployeeSchema);