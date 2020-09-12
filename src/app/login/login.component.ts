import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageserviceService } from '../storageservice.service';
import {BookingserviceService} from '../bookingservice.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pwd:string;
  msg:string;

  constructor(private bookingservice: BookingserviceService,private router:Router, private storageservice:StorageserviceService) { }

  ngOnInit():void{}
  
  doLogin(){
   this.bookingservice.doLogin(this.uname,this.pwd).subscribe(data=>{this.storageservice.setItem("tokenId",data);
   this.msg=undefined;console.log(data);
      this.router.navigateByUrl("/");
    },
    error=>{this.msg="Invalid Credentials";console.log(error)});
  }
}
