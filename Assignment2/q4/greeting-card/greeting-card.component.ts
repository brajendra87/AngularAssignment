import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-card',
  templateUrl: './greeting-card.component.html',
  styleUrls: ['./greeting-card.component.css']
})
export class GreetingCardComponent implements OnInit {

  categories: any[]=['Forest','Nature','Sport'];
  imageName:string;
  constructor() { }

  ngOnInit() {
  }

  selectChangeHandler($event)
  {   
  
   let name=$event.target.value.toLowerCase();
   this.imageName=$event.target.value.toLowerCase();
   
  }

}
