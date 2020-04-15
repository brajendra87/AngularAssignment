import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GreetingCardComponent } from './greeting-card/greeting-card.component';
import { Q2Component } from './q2/q2.component';
import { HomeComponent } from './test/home/home.component';
import { AboutComponent } from './test/about.component';
import { ContactComponent } from './test/contact.component';
import { ProductsComponent } from './test/products/products.component';
import { CourseComponent } from './course/course.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

const routes: Routes = [
   {path:'',component:LoginComponent},
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'dashboard',component:DashboardComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
