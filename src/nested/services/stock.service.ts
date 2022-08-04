import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
 stockUrl='http://localhost:9094/stocks/';
  companyUrl='http://localhost:9093/';
//stockUrl='https://1mn3vr9u93.execute-api.us-east-1.amazonaws.com/dev/';
// companyUrl='https://rr5kcd0ni6.execute-api.us-east-1.amazonaws.com/dev/';
headers:any;


   constructor( private http : HttpClient,
     private navService : NavigationService ) {
  
    }
    // constructor( private http : HttpClient) {
    
    //   }

  getAllStocks(query:string): Observable<any>{
    console.log(query);
    // this.headers=new HttpHeaders()
    //   .set('content-type', 'application/json')
    // .set('Access-Control-Allow-Origin', '*');
    
    //if(this.navService.token){
     // this.headers=new HttpHeaders()
      //.set('content-type', 'application/json')
    //.set('Access-Control-Allow-Origin', '*')
    //  .set('token',this.navService.token);
    //}
   return  this.http.get<any>(this.stockUrl+query,{'headers':this.headers});
    //return  this.http.get<any>(this.stockUrl+query);
   }

   getAllCompanies(query:string): Observable<any>{
    // this.headers=new HttpHeaders()
    // .set('content-type', 'application/json')
    // .set('Access-Control-Allow-Origin','*');
  // console.log('@@@@@');
  // console.log('header bfr sending'+this.headers);
    //if(this.navService.token){
      //this.headers=new HttpHeaders()
      //.set('content-type', 'application/json')
      //.set('Access-Control-Allow-Origin', '*')
     // .set('token',this.navService.token);
    //}
   // console.log(this.companyUrl+query,{'headers':this.headers});
   return  this.http.get<any>(this.companyUrl+query,{'headers':this.headers});
   // return  this.http.get<any>(this.companyUrl+query);
   }
}
