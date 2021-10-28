import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-catalog',
  template: `
    
    <button routerLink="offers">offers</button>
    <button routerLink="categories">categories</button>
    <button routerLink="products">products</button>
    <button routerLink="foryou">foryou</button>
   
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
