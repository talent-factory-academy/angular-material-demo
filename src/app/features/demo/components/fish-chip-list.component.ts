import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-fish-chip-list',
  template: `
    <mat-chip-list aria-label="Fish selection">
      <mat-chip>One fish</mat-chip>
      <mat-chip>Two fish</mat-chip>
      <mat-chip color="primary" selected>Primary fish</mat-chip>
      <mat-chip color="accent" selected>Accent fish</mat-chip>
    </mat-chip-list>

  `,
  styles: [
  ]
})
export class FishChipListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
