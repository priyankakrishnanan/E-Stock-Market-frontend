import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {RadioButtonModule} from 'primeng/radiobutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import { AboutComponent } from './components/about/about.component';
import {TabViewModule} from 'primeng/tabview';
import {PasswordModule} from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import {ChartModule} from 'primeng/chart';
import { ErrorComponent } from './components/error/error.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { LoginComponent } from './components/login/login.component';
import { StockInterceptor } from './interceptor/stock.interceptor';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    StocksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    FormsModule,
    AppRoutingModule,
    TableModule,
    ChartModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    PanelModule,
    RadioButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
TabViewModule,
MessageModule,
PasswordModule,
MessagesModule,
ToastModule,
ConfirmDialogModule
  ],
  providers: [MessageService,ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: StockInterceptor, multi: true }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
