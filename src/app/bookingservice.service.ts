import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from './constants'
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {
  flag=false;
  constructor(private http: HttpClient) { }
  public cancelbooking(bookingId:string):Observable<any> {
   // let utoken = localStorage.getItem("token");
    //f(utoken==null)utoken="";
    //const httpHeaders = new HttpHeaders({"userId": utoken});
   // console.log(utoken);
    return this.http.delete(Constants.SEARCH_URL+bookingId,{responseType:'text'});
  }
  decrypt(token:string){
    let str="";
    for(let i=0;i<token.length;i++){
      str=str + String.fromCharCode(token.charCodeAt(i)-3);
    }
    console.log(str);
    return str;
  }
  encrypt(token:string){
    let str="";
    for(let i=0;i<token.length;i++){
      str=str + String.fromCharCode(token.charCodeAt(i)+3);
    }
    return str;
  }
  public doLogin(userId:string,pwd:string):Observable<any>{
    let postData=new FormData();
    postData.append('userid',userId);
    postData.append('password',this.encrypt(pwd));
    return this.http.post("http://localhost:8019/cncltkt/login",postData,{responseType:'text'});
  }
  public doLogout(){
    this.flag=true;
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders = new HttpHeaders({"Userid":utoken});
    return this.http.get("http://localhost:8019/cncltkt/logout",{headers:httpHeaders,responseType:'text'});
  }
}
