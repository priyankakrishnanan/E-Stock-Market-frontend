import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/nested/models/user.model';
import { NavigationService } from 'src/nested/services/navigation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:any;
  constructor(private route : Router, private navService: NavigationService) { 
    console.log(this.navService.user);
    this.user = this.navService.user;
  }

  ngOnInit(): void {
    this.user = this.navService.user;
  }

  addStocks(){

  }

  login(){
      this.route.navigate(['./login']);
  }

  searchStocks(){
    if(this.user.userName!=''){
      console.log(this.user.userName);
      this.route.navigate(['./stocks']);
    }else{
      this.route.navigate(['./login']);
    }
  }

  
 
}
