import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {
  productName: string = "";
  discription: string = "";
  companyName: string = "";

  products: any[] = [
    { name: 'Samsung s8', discription: 'Samsung s8 price:  40000', company: 'Samsung' },
    { name: 'Samsung s9', discription: 'Samsung s9 price:  62000', company: 'Samsung' },
    { name: 'iPhone 8', discription: 'iPhone 8 price: 60000', company: 'Apple' },
    { name: 'Pixel 2', discription: 'Pixel2 price :53000', company: 'Google' },
  ]
  constructor() {
    this.productName = this.products[0].name;
    this.discription = this.products[0].discription;
    this.companyName = this.products[0].company;
  }
 
  ngOnInit() {
  }


  onClick(name) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name == name) {
        this.productName = this.products[i].name;
        this.discription = this.products[i].discription;
        this.companyName = this.products[i].company;
      }
    }

  }
}
