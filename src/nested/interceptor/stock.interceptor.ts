import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationService } from '../services/navigation.service';

@Injectable()
export class StockInterceptor implements HttpInterceptor {

  constructor(private navigationServcie : NavigationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>) {
  //   var token = this.navigationServcie.token;
  //   token ='0e741f5a-ae01-4d89-9362-1ce1390fb8f5'
  //   request =  request.clone({
  //     headers: request.headers.set('token', token)
  // });
  console.log(request.headers);
  console.log(request.url);
    return request;
  }
}