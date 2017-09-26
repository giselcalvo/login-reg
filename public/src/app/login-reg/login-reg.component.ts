import { Component, OnInit } from '@angular/core';
import { LoginRegService } from './../login-reg.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
	newUser: object = {
		name: "",
		username: "",
		email: "",
		password: "",
		passwordConfirmation: "",
	}
	user: object = {
		username: "",
		email: "",
		password: "",
	}
  errors;

  constructor(private _logRegService: LoginRegService, private _router: Router, private _route: ActivatedRoute) 
  { }

  ngOnInit() {
  }
  register(){
  	this._logRegService.registerUser(this.newUser)
  	.then((data)=>{
  		if (data.errors){
  			console.log(data.errors);
  		}else{
  			console.log("successfully got in ", data)
  			this._router.navigate(['/']);
  		}
  	})
  }

  login(){
  	this._logRegService.loginUser(this.user)
  	.then((data)=>{
  		if (data.errors){
        console.log("unable to login")
        this.errors = data.errors.name.message
  			console.log(data.errors.name.message);
        this._router.navigate(['login'])
  		}else{
  			console.log("successfully got logged in ", data)
  			this._router.navigate(['/']);
  		}
  	})
  }




}
