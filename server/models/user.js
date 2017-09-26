let mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
	name: {type: String, require: true, minlength: 3},
	polls: [{type: mongoose.Schema.Types.ObjectId, ref: 'Polls'}]
}, {timestamps:true});

mongoose.model('User',UserSchema);