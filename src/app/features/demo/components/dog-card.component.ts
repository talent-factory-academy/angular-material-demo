import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fb-dog-card',
  template: `

    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{title}}</mat-card-title>
        <mat-card-subtitle>{{subtitle}}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="image" alt="Photo of a Shiba Inu">
      <mat-card-content>
        <ng-content></ng-content>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="buttonLeftClick.emit()">{{labelButtonLeft}}</button>
        <button mat-button (click)="buttonRightClick.emit()">{{labelButtonRight}}</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .example-card {
      max-width: 400px;
    }

    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `]
})
export class DogCardComponent {
  @Input() title!: string;
  @Input() subtitle!: string
  @Input() image!: string
  @Input() labelButtonLeft!: string
  @Input() labelButtonRight!: string
  @Output() buttonLeftClick = new EventEmitter()
  @Output() buttonRightClick = new EventEmitter()
}
