let mongoose = require('mongoose');
let PollSchema = mongoose.Schema({
	name: {type: String},
	question: {type: String},
	option1: {type: String},
	option2: {type: String},
	option3: {type: String},
	option4: {type: String},
	option1Votes: {type: Number},
	option2Votes: {type: Number},
	option3Votes: {type: Number},
	option4Votes: {type: Number},

}, {timestamps:true});

mongoose.model('Poll', PollSchema);



// name
// question
// date
// action


