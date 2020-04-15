import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userName:string="";
 password:string=";"
 msg:string="";
 error:string="";

 
  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
     if(this.userName.toLowerCase()=="admin" && this.password.toLowerCase()=="123")
     {
      this.route.navigateByUrl('/dashboard');
     }
     else
     {
       this.error="Invalid User Name or password";
     }
  }
  
}
