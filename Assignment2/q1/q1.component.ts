import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {
 count:number=0;
 text:string;
  constructor() { }

  ngOnInit() {
  }

  onIncreament()
  {
     this.count+=1;
  }
  onReset()
  {
    this.count=0;
  }

  


}
