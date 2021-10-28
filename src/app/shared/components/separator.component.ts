import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-separator',
  template: `
    <br>
    <mat-divider></mat-divider>
    <br>
  `,
  styles: [
  ]
})
export class SeparatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
