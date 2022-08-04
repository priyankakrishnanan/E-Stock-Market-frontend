import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
   { path: 'home', component: HomeComponent},
   { path: 'about', component: AboutComponent},
    { path: 'stocks', component: StocksComponent},
    { path: 'login', component: LoginComponent},
    { path: 'logout', component: HomeComponent},    
  { path: 'error', component: ErrorComponent},
     {path:'**', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
