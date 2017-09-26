let users = require('./../controllers/users');
let polls = require('./../controllers/polls');
let path = require('path');

module.exports=(app)=>{
	app.post('/api/users', users.register);
	app.post('/api/login', users.login);
	app.get('/api/users/current', users.getCurrent);
	app.get('/api/users/logout', users.logout);

	app.post('/api/createPoll/:id', polls.create);
	app.get('/api/getPolls', polls.read);
	app.post('/api/getPoll', polls.readPoll);
	app.post('/api/addVote', polls.addVote);

	app.post('/api/deletePoll', polls.destroy);

	app.all('*', (req,res)=>{
		res.sendFile(path.resolve("./public/dist/index.html"));
	}) 
}