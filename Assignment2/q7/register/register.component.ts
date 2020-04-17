import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: NgbDateStruct;
  registrationForm:FormGroup;
  isSubmitted:boolean=false;
  constructor() {
    
   }

  ngOnInit() {
 
     this.registrationForm=this.fb.group({
       name:['', [Validators.required,Validators.minLength(3)]],
       dob:['',Validators.required],
       address:['', Validators.required]
      });
  }
  get f(){ return this.registrationForm.controls}
  onSubmit()
  {
    console.log(this.registrationForm);
    this.isSubmitted=true;
  }
}
