import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { SuccessComponent } from './success/success.component';
import { NewPollComponent } from './new-poll/new-poll.component';
import { PollDetailsComponent } from './poll-details/poll-details.component';

const routes: Routes = [	
	{
		path: 'login',
		component: LoginRegComponent

	},
	{
		path: '',
		component: SuccessComponent
	},
	{
		path: 'dashboard',
		component: SuccessComponent
	},
	{
		path: 'create',
		component: NewPollComponent
	},
	{
		path: 'poll/:id',
		component: PollDetailsComponent
	}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
