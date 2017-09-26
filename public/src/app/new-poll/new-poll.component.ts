import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PollsService } from './../polls.service';
import { LoginRegService } from './../login-reg.service';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {
	newPoll: object = {
		name: "",
		question: "",
		option1: "",
		option2: "",
		option3: "",
		option4: "",
		option1Votes: 0,
		option2Votes: 0,
		option3Votes: 0,
		option4Votes: 0,

	}
	currentUser = {};
	errors;

  constructor(private _loginRegService: LoginRegService, private _pollsService: PollsService, private _router: Router, private _route: ActivatedRoute ) { }

  ngOnInit() {
  	this.getCurrentUser();
  }

  createPoll(){
  	console.log("in new-poll.component.ts: createPoll() newPoll:", this.newPoll)
  	this.newPoll["name"] = this.currentUser["name"];
  	this._pollsService.createPoll(this.newPoll, this.currentUser["_id"])
  	.then((data)=>{
  		if (data.errors){
  			console.log(data.errors);
  		}else{
  			console.log("successfully created Poll ", data)
  			this._router.navigate(['/dashboard']);
  		}
  	})
  }

    getCurrentUser(){
      this._loginRegService.getCurrentUser()
    .then((data)=>{
      if (data.errors){
        console.log("failed to find current user");
        this.errors= data.errors;
        this._router.navigate(['login']);
      }else{
        console.log("found current user");
          this.currentUser = data;
      }
    
    })
  }

}
