let mongoose = require('mongoose');
let Poll = mongoose.model('Poll');
let User = mongoose.model('User');

module.exports = {
	create: (req, res)=>{
		console.log("hit polls.js create()");
		User.findOne({_id: req.params.id}, (err, user)=>{
			if(err){
				console.log("unable to find user with id:", req.params.id)
				res.json(err);
			}else{
				let newPoll = new Poll(req.body);

				newPoll.save((err, savedPoll)=>{
					if (err){
						console.log('something went wrong');
						res.json(err);
					}
					else{
						console.log("*****successfully saved Poll, adding poll****" ,savedPoll );
						user.polls.push(savedPoll);
						user.save((err, savedUser)=>{
							if (err){
								console.log("unable to save user's poll")
								res.json(err);
							}else{
								console.log("successfully updated the user with new poll")
								res.json(true);
							}
						})
					}
				})
			}
		})
	},
	read: (req, res)=>{
		console.log("hit polls.js read()");
		Poll.find({}).exec((err, foundPolls)=>{
			if(err){
				console.log("error loading polls");
				res.json(err);
			}else{
				console.log("found the polls");
				res.json(foundPolls)
			}
		})
	},
	readPoll: (req, res)=>{
		console.log("hit polls.js readPoll()", req.body["_id"] );
		Poll.findOne({_id: req.body["_id"]}).exec((err, foundPoll)=>{
			if(err){
				console.log("error loading poll");
				res.json(err);
			}else{
				console.log("*****found the poll: ", foundPoll);
				res.json(foundPoll)
			}
		})
	},
	addVote: (req, res)=>{
		console.log("hit polls.js addVote()", req.body["_id"] );
		Poll.findOne({_id: req.body["_id"]}).exec((err, foundPoll)=>{
			if(err){
				console.log("error loading poll");
				res.json(err);
			}else{
				console.log("Adding a vote to the poll: ", foundPoll, req.body["option"]);
				// add +1 to optionNVote
				foundPoll["option1Votes"] +=1;
				foundPoll["option2Votes"] +=1;
				foundPoll["option3Votes"] +=1;
				foundPoll["option4Votes"] +=1;
				res.json(foundPoll)
			}
		})	
	},

	destroy: (req, res)=>{
		console.log("hit poll destroy()", req.body)
		Poll.remove({_id: req.body["_id"] }, (err)=>{
			if (err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("poll was deleted");
				res.json(true);
			}
		})
	}


}