import { Component, OnInit } from '@angular/core';
import {User} from '../Models/User'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[]=[
    new User('brajendra','Dhakar','bdhakar'),
    new User('Rohan','sharma','rSharma'),
    new User('sumit','patel','spatel'),
    new User('amin','patel','amit.p'),
    new User('sumit','sharma','sumit.s')
  ]
  constructor() { }

  ngOnInit() {
  }
  onDelete(id)
  {
     if(confirm("Are you sure to delete this user"))
     {
       this.users.splice(id,1);
     }
  }

}
