import { Component, OnInit, inject, Inject } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseList:any[]=[
    {id:1,courseName:'Spring'},
    {id:2,courseName:'Hibernate'},
    {id:3,courseName:'Junit'},
    {id:4,courseName:'Html'},
    {id:5,courseName:'CSS'},
  ];
  constructor( @Inject(Router) private route: Router) { }

 
  ngOnInit() {
  }
  navigation($event)
  {
    let id: string = (event.target as Element).id;
    this.route.navigateByUrl('/coursedetails/'+id);
  }


}
