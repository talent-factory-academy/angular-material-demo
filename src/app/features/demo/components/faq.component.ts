import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'fb-faq',
  template: `
    <div class="example-action-buttons">
      <button mat-button (click)="accordion.openAll()">Expand All</button>
      <button mat-button (click)="accordion.closeAll()">Collapse All</button>
    </div>
    
    <mat-accordion class="example-headers-align" multi>
      
      <mat-expansion-panel *ngFor="let f of faq">
        <mat-expansion-panel-header>
          <mat-panel-title>
            {{f.title}}
          </mat-panel-title>
        </mat-expansion-panel-header>
        
        {{f.content}}
      </mat-expansion-panel>
      
    </mat-accordion>
  `,
  styles: [
  ]
})
export class FaqComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  faq = [
    { id: 1, title: 'FAQ 1', content: 'lorem ipsum 1....'},
    { id: 2, title: 'FAQ 2', content: 'lorem ipsum 2....'},
    { id: 3, title: 'FAQ 3', content: 'lorem ipsum 3....'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
