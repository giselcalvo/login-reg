let users = require('./../controllers/users');
let path = require('path');

module.exports=(app)=>{
	app.post('/api/users', users.register);
	app.post('/api/login', users.login);
	app.get('/api/users/current', users.getCurrent);
	app.get('/api/users/logout', users.logout);
	
	app.all('*', (req,res)=>{
		res.sendFile(path.resolve("./public/dist/index.html"));
	}) 
}