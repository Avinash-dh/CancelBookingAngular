import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {
  bookingId:string;  
  msg:string;
  errorMsg:string;
 constructor(private bookingservice: BookingserviceService,private route:ActivatedRoute) { }

  ngOnInit(){
    console.log("cancelbooking");
  }

    cancelbooking(){
      this.bookingservice.cancelbooking(this.bookingId).subscribe(data=>{console.log(this.msg);
        this.msg=JSON.parse(data).message;this.errorMsg=undefined},
        error=>{console.log(error);this.errorMsg=JSON.parse(error.error).message;this.msg=undefined});
   
  }

  }


  