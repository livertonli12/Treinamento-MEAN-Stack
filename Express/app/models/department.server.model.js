var mongoose      = require('mongoose'),
    Schema        = mongoose.Schema;

var DepartmentSchema = new Schema({
	name: { type: String, required: true },
	floor: { type: String, required: true },
	responsible: { type: String, required: true }
});

mongoose.model('Department', DepartmentSchema);