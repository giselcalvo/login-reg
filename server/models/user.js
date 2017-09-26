let mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
	name: {type: String, require: true, minlength: 3},
	// username: {type: String},
	// email: {type: String},
	// password: {type: String}
}, {timestamps:true});

mongoose.model('User',UserSchema);