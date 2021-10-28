import { Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../model/user';

@Component({
  selector: 'fb-dialog-delete',
  template: `
    <h1 mat-dialog-title>{{data.title}} {{data.user.name}}?</h1>
    <div mat-dialog-content>
      <p>Are you sure?</p>
    </div>
    
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button mat-dialog-close="confirm">Confirm</button>
    </div>
  `,
  styles: [
  ]
})
export class DialogDeleteComponent implements OnInit {
  @Output() doSomething = new EventEmitter()

  constructor(
    @Inject(MAT_DIALOG_DATA)  public data: { user: User, title: string }
  ) {
    console.log(data)
  }

  ngOnInit(): void {
  }

}
