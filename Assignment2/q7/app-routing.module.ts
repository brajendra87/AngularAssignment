import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CourseComponent } from './course/course.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'coursedetails/:id', component: CoursedetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
