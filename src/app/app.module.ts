import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import {Router,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgForm, FormsModule } from '@angular/forms';
const appRoutes :Routes=[]

@NgModule({
  declarations: [
    AppComponent,
    CancelbookingComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
