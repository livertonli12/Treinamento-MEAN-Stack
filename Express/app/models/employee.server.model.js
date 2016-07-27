var mongoose      = require('mongoose'),
    Schema        = mongoose.Schema;

var EmployeeSchema = new Schema({
	name: { type: String, required: true },
	cellphone: { type: String, required: true, match: [/^\d{4,5}-\d{4}$/, "Please fill a valid cellphone"] },
	email: { type: String, unique: true, required: true, match: [/.+\@.+\..+/, "Please fill a valid e-mail address"] },
	department: { type: String }
});

mongoose.model('Employee', EmployeeSchema);