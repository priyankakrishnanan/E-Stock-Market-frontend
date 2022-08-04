import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import { NavigationService } from 'src/nested/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   items: MenuItem[];
  constructor(public service: NavigationService) {
     this.items=[];
   }


  ngOnInit() {
  
}
}
