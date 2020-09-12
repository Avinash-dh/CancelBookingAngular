import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookingserviceService } from './bookingservice.service';
import { StorageserviceService } from './storageservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CancelBooking';
  msg:string;
  errorMsg:string;
  loginflag:boolean=false;
  userName:string;
  role:string;
  constructor(private bookingService:BookingserviceService,private router:Router, private storageService:StorageserviceService){
    if(localStorage.getItem("tokenId")!=null){
      let userstr=localStorage.getItem("tokenId");
      console.log(userstr.split("-")[1]);
      this.userName=this.bookingService.decrypt(userstr.split("-")[1]);
      this.loginflag=true;
      this.role=this.bookingService.decrypt(userstr.split("-")[2]);
    }
  }
  ngOnInit():void{
    this.storageService.watchStorage().subscribe(data=>{
      console.log(data);
      if( data=="set"){
        this.loginflag=true;
        let userstr=localStorage.getItem("tokenId");
        console.log(userstr.split("-")[2]);
        this.userName=this.bookingService.decrypt(userstr.split("-")[1]);
      }
      else
      this.loginflag=false;
    });
  }
  logout():void{
      this.storageService.removeItem("tokenId");
      alert("You have logged out");
  
      this.loginflag=false;
      this.router.navigateByUrl("/");
  }
}
