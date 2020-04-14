import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {
  text:string;
  constructor() { }

  ngOnInit() {
  }


   textChanged(event) {        
    
    console.log("Previous hobby",this.text);
    console.log("Next hobby ",event);
    
        this.text=event;                         
    }
}
