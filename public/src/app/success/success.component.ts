import { Component, OnInit } from '@angular/core';
import { LoginRegService } from './../login-reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
	currentUser: object = {name: '', username: '', email: ''}
  errors;
  constructor(private _logRegService: LoginRegService, private _router: Router) { }


  ngOnInit() {
    this.getCurrentUser();
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

}
