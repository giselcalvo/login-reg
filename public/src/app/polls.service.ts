import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PollsService {

  constructor(private _http: Http) { }
  createPoll(poll, user_id){
  		console.log("in poll.service.ts: createPoll(): poll, user_id", poll, user_id)
  		return this._http.post('/api/createPoll/'+ user_id, poll).map(Response=>Response.json()).toPromise();
  }

  getPolls(){
		console.log("in poll.service.ts: getPolls()")
		return this._http.get('/api/getPolls/').map(Response=>Response.json()).toPromise();
	}
	getPoll(poll_id){
		console.log("in poll.service.ts: getPoll(): poll_id", poll_id)
		return this._http.post('/api/getPoll/', poll_id).map(Response=>Response.json()).toPromise();
	}

	addVote(poll_vote){
		console.log("in poll.service.ts: addVote(): poll_vote", poll_vote)
		return this._http.post('/api/addVote/', poll_vote).map(Response=>Response.json()).toPromise();
	}

	deletePoll(poll_id){
		console.log("in poll.service.ts: deletePoll(): poll_vote", poll_id)
		return this._http.post('/api/deletePoll/', poll_id).map(Response=>Response.json()).toPromise();
	}

}
