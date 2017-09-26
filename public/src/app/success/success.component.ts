import { Component, OnInit } from '@angular/core';
import { LoginRegService } from './../login-reg.service';
import { PollsService} from './../polls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
	currentUser: object = {name: '', username: '', email: ''}
  polls = [];
  searchTerm ="";
  errors;
  constructor(private _pollsService: PollsService, private _logRegService: LoginRegService, private _router: Router) { }


  ngOnInit() {
    this.getCurrentUser();
    this.getPolls();
  }

  logout(){
    console.log("in logout function")
      this._logRegService.logout()
    .then((data)=>{
      if (data.errors){
        console.log("failed to logout");
        this._router.navigate(['login']);
      }else{
        console.log("User has been logged out"); 
        this._router.navigate(['login']); 
      }

    })
  }

  getCurrentUser(){
      this._logRegService.getCurrentUser()
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

  getPolls(){
    console.log("in success.component.ts: getPolls()")
    this._pollsService.getPolls()
    .then((data)=>{
      if (data.errors){
        console.log(data.errors);
      }else{
        console.log("successfully got all the polls ", data)
        this.polls = data;
      }
    })
  }

  searchQuestions(){
    if(this.searchTerm == ""){
       this.getPolls();
    }
   
    this.polls = this.polls.filter((poll)=>{
      return poll.question.includes(this.searchTerm);
    })
  }

  deletePoll(poll_id){
    console.log("in deletePoll()", poll_id)
    this._pollsService.deletePoll(poll_id)
    .then((data)=>{
      if (data.errors){
        console.log(data.errors);
      }else{
        console.log("successfully got all the polls ", data)
        //this.polls = data;
        this.getPolls()
      }
    })
  }

}
