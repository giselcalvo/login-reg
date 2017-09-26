import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginRegService} from './login-reg.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { LoginRegComponent } from './login-reg/login-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    LoginRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [LoginRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
