import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../model/user';

@Component({
  selector: 'fb-dialog-upsert',
  template: `
    
    <form #f="ngForm">
      <h2 mat-dialog-title>
        {{user?.id ? 'Edit User' : 'Add User'}}
      </h2>
      
      <div mat-dialog-content>
        <mat-form-field class="example-form-field" appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput type="text" [ngModel]="user?.name" name="name" required>
        </mat-form-field>
      </div>
      
      <mat-icon [cdkCopyToClipboard]="f.value?.name || ''">content_copy</mat-icon>
      
      <div mat-dialog-actions>
        <button mat-button type="button" 
                [mat-dialog-close]>CANCEL</button>
        <button mat-button type="submit" 
                [disabled]="f.invalid" 
                [mat-dialog-close]="f.value">
          {{user ? 'EDIT' : 'ADD'}}
        </button>
      </div>
    </form>
  `,
  styles: [
  ]
})
export class DialogUpsertComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User | undefined
  ) {
    console.log('dialog upsert', user)
  }

  ngOnInit(): void {
  }

}
