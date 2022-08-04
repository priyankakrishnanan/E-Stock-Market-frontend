import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  token:any;
  items: MenuItem[];
  userItems:MenuItem[];
  user: any={id:0,userName:'',password:'',role:'',userId:''};
  constructor(private route : Router) {
    this.userItems=[];
    this.items=[{
      label: 'Home', routerLink:"./home"},
      {label: 'About', routerLink:"./about"},
       { label: 'Stocks', routerLink:"./stocks"
      },
     ]
     if(this.user.userId){
       this.items.push( { label: 'LogOut', routerLink:"./home"
      });
     }else{
      this.items.push( { label: 'Login/Register', routerLink:"./login"});
     }
   }
   setNavBar(){
     console.log('inside setting logout');
    this.items=[{
      label: 'Home', routerLink:"./home"},
      {label: 'About', routerLink:"./about"},
       { label: 'Stocks', routerLink:"./stocks"
      },
     ];
     console.log('inside setting logout'+this.items);
     console.log('inside setting logout'+this.user.userId);
     if(this.user.userId!=''){
       this.items.push( { label: 'LogOut', routerLink:"./home",command:()=>{
         this.user={id:0,userName:'',password:'',role:'',userId:''};
         this.token='';
         this.setNavBar();
         this.route.navigate(["./home"]);
       }
      });
     }else{
      this.items.push( { label: 'Login/Register', routerLink:"./login"});
     }
   }

   setItems(menu:MenuItem[]){
    this.items=menu;
   }

   setUserNavigation(){
     this.user.role="USER";
     this.setNavBar();
     console.log("Setting user role in navs "+ this.user.role)
    this.userItems=([{
      label: 'Book Flight', routerLink:"bookFlight"},
      {label: 'Manage Bookings', routerLink:"manageBooking"},
       { label: 'Booking History', routerLink:"bookingHistory"
      }]);
  }

    setAdminNavigation(){
      this.user.role="ADMIN";
      this.setNavBar();
      this.userItems=[{
        label: 'Manage Schedules', routerLink:"manageSchedules"},
        {label: 'Manage Discounts', routerLink:"manageDiscounts"},
         { label: 'Manage Airlines', routerLink:"manageAirlines"
        },
        { label: 'Reports', routerLink:"reports"}
      ];
    }
}
