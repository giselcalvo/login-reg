let mongoose = require('mongoose');
let User = mongoose.model('User');
let bcrypt = require('bcrypt');

module.exports = {
	register: (req, res)=>{
		console.log("hit users.js: register()")
		User.findOne({email: req.body.email}).exec((err, foundUser)=>{
			if(err){
				console.log("error");
			}else{
				if(!foundUser){
					let newUser = new User(req.body);
					let hashedPW = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
					newUser.password = hashedPW;
					newUser.save((err)=>{
						if (err){
							console.log('something went wrong');
							res.json(err);
						}
						else{
							console.log("successfully registered");
							req.session.userId = foundUser._id;
							res.json(newUser);
						}
					})

				}
			}
		})
	},

	logout: (req, res)=>{
		req.session.destroy();
		console.log("session:",req.session)
		res.json(true);
	},

	login: (req, res)=>{
		console.log("hit users.js: login()")
		User.findOne({email: req.body.name}).exec((err, foundUser)=>{
			if (err){
				console.log("error checking user");
			}
			else{
				if(!foundUser){
					console.log("user not found, creating new user")
					let newUser = new User(req.body);
					newUser.save((err)=>{
						if (err){
							console.log('something went wrong');
							res.json(err);
						}
						else{
							console.log("successfully added user");
							req.session.userId = newUser._id;
							res.json(newUser);
						}
					})

				}
				if(foundUser){
					req.session.userId = foundUser._id;
					res.json(true);
				}
			}
		})

	},
	getCurrent: (req, res)=>{
		console.log("hit users.js: getCurrent()")
		if(req.session.userId == undefined){
			res.json({
				errors:{
					getCurrent:{
						message: "You are not logged in"
					}
				} 
			})
		}else{
			User.findOne({_id: req.session.userId}).exec((err, foundUser)=>{
				if (err) {
					console.log("you goofed");
				res.json(false);
				}
				else{
					console.log("found user in session");
					res.json(foundUser);
				}

			})
		}
	}
}
