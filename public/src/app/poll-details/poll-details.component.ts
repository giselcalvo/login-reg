import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Http } from '@angular/http';
import { PollsService } from './../polls.service'
@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {

	poll = {}
  constructor(private _pollsService: PollsService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.loadPoll();
  }

  loadPoll(){
  	console.log("in poll-details.component, loadPoll()")
	  this._route.paramMap.subscribe( params => {
    console.log("***got the param****", params.get('id'));
    let id = params.get('id');
    this._pollsService.getPoll({"_id": id})
    .then((data)=>{
      if (data.errors){
        console.log("error getting the poll info");
      }else{
        console.log("successfully got the poll ", data)
         this.poll = data;
         console.log(this.poll);
      }
    })
   })
  }

  addVote(option){
  	console.log("in addVote()");
  	this._pollsService.addVote({"_id": this.poll["_id"], "option": option})
    .then((data)=>{
      if (data.errors){
        console.log(data.errors);
      }else{
        console.log("successfully added a vote", data)
         //this.question = data;
         //console.log(this.question);
         console.log('test');
         this.loadPoll();
         this._router.navigate(['/poll/'+this.poll["_id"]]);


      }
    })
  }

}
