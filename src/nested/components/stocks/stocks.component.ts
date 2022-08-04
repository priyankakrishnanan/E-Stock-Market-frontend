import { Component, OnInit } from '@angular/core';
import { Search } from 'src/nested/models/search.model';
import { StockService } from 'src/nested/services/stock.service';
import {  formatDate } from '@angular/common';
import { MessageService } from 'primeng/api';
  
import { Inject,  LOCALE_ID }  from '@angular/core';
import { NavigationService } from 'src/nested/services/navigation.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  search: any={companyCode:"",startDate:'',endDate:''};
  companies: any[]=[];
  company:any;
  stocks: any;
  minPrice:any;
  maxPrice:any;
  avgPrice:any;
  constructor(private navService: NavigationService,
     public msgService : MessageService,
      public service : StockService,@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void {
    // if(!this.navService.token || this.navService.token==''){
    //   this.msgService.add({severity:'warning', summary:'Login to continue', detail:""});
    // }
  }

  findStocks(){
    // if(!this.navService.token || this.navService.token==''){
    //   this.msgService.add({severity:'warning', summary:'Login to continue', detail:""});
    //   return;
    // }
    if(!this.search.companyCode||this.search.companyCode==''||this.search.companyCode==null){
      this.msgService.add({severity:'warning', summary:'CompanyCode is required'+this.search.companyCode, detail:""});
    }
    this.service.getAllCompanies("getCompany/"+this.search.companyCode).subscribe(data=>{
      console.log(data);      //this.companies = data["companyList"];
      this.companies = data;
      if(this.companies.length==0){
        this.msgService.add({severity:'warning', summary:'No Company Available for companyCode '+this.search.companyCode, detail:""});
    
      }else{
      this.company = this.companies[0];
      if(this.companies.length!=0&&this.stocks?.length==0){
        this.msgService.add({severity:'warning', summary:'No Stocks Available for '+this.search.companyCode, detail:""});
      }
    }
    if(this.search.startDate && this.search.endDate){
      //var companyCode=this.companies[0];
      //var parsedData = JSON.stringify(this.companies[0]);
      // var parsedData=JSON.parse(JSON.stringify(this.companies[0]));
      // console.log(parsedData.companyCode);
    this.service.getAllStocks('getStock/'+this.search.companyCode).subscribe(data=>{
      this.stocks=data;
      // this.minPrice=data["minPrice"];
      // this.avgPrice = data["averagePrice"];
      // this.maxPrice=data["maxPrice"];
      console.log(this.stocks);
    });
}else{
  this.stocks=this.company.stocks;
}
});
  }
}
