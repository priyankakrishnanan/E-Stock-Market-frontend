import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserurl='https://le3ao0b6if.execute-api.us-east-1.amazonaws.com/dev/getToken/';
  registerUserUrl='https://gymwsybgm9.execute-api.us-east-1.amazonaws.com/dev/registeruser';
  public user:any;
  constructor( private http : HttpClient ) {
    this.user= {id:0,userId:'',name:'',password:'',role:''};
   }

  saveUser(user:any){
    user.active=true;
    this.http.post(this.registerUserUrl,user).subscribe(data => {
      console.log(data);
  });
}

  getUser(user:any):Observable<any>{
   console.log(this.getUserurl);
   var arr :any[]=[];
    return this.http.post<any>(this.getUserurl,user);  
  }


}
