import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { MaterialSharedModule } from '../../shared/material-shared.module';
import { DialogDeleteComponent } from './components/dialog-delete.component';
import { DialogUpsertComponent } from './components/dialog-upsert.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactsComponent,
    DialogDeleteComponent,
    DialogUpsertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule,
    MaterialSharedModule,
  ]
})
export class ContactsModule { }
