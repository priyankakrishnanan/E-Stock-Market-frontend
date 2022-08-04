import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/nested/services/navigation.service';
import { UserService } from 'src/nested/services/user.service';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user : any;
msgs: Message[]=[];

  constructor(private msgService: MessageService, private navService: NavigationService, private userService: UserService, private route : Router) 
  { 
    this.user= {userId:'',userName:'',password:''};
  }

  ngOnInit(): void {
  
  }

  register(){
    if(this.validateUser())
    return;
    this.userService.getUser(this.user).subscribe((data)=>{
      console.log(data);
      var dbUser = data.Items[0];
      if(dbUser!=null&&dbUser.userName==this.user.userName){
        this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Username already Exists"});
      }else{
        this.userService.saveUser(this.user);
        this.route.navigate(['./home']);
      }
   
  });
}

  validateUser():boolean{
    if(this.user.userName==''){
      this.msgs.push({severity:'warning', summary:'Warn Message', detail:"Username required"});
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Username required"});
      return true;
    }else if(this.user.password==''){
      this.msgs.push({severity:'warning', summary:'Warn Message', detail:"Password required"});
      this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Password required"});
      return true;
    }
    return false;
  }

  login(){
//     if(this.validateUser())
//     return;
// this.userService.getUser(this.user).subscribe((data)=>{
// console.log(data);
// var userData= data.Items[0];
// console.log("user data - "+userData);
//    if(userData!=null){
//     console.log('User not null');
//      if(userData.password!=this.user.password){
//       this.msgs.push({severity:'warning', summary:'Warn Message', detail:"Invalid Password"});
//       this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Invalid Password"});
//       return;
//      }
//      this.user=userData;
//      this.navService.user=this.user;
//      this.navService.token=this.user.userId;
     
//   }else{
//     this.msgs.push({severity:'warning', summary:'Warn Message', detail:"Invalid Username/password"});
//     this.msgService.add({severity:'warning', summary:'Warn Message', detail:"Invalid Username/password"});

//   }
  
// }
// )
this.navService.setNavBar();
    this.route.navigate(['./home']);
}
}
