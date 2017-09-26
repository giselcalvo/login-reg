import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginRegService} from './login-reg.service';
import { PollsService } from './polls.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { NewPollComponent } from './new-poll/new-poll.component';
import { PollDetailsComponent } from './poll-details/poll-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    LoginRegComponent,
    NewPollComponent,
    PollDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [LoginRegService, PollsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
