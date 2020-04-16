import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name:string;
  email:string;
  address:string;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.studentService.isSubmitted = true;
    this.name="";
    this.email="";
    this.address="";
  }

}
