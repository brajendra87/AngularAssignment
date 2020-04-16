import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './q8/student/student.component';
import {HomeComponent} from './q8/home/home.component'
import { StudentService } from './q8/services/student.service';
const routes: Routes = [
{path:'', component: StudentComponent},
{path:'home', component: HomeComponent,canActivate:[StudentService]}
];        

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
