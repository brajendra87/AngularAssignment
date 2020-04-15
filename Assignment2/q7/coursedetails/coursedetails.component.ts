import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  courseId:string;
  constructor( private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  this.courseId=this.activeRoute.snapshot.params['id']
  }



}
