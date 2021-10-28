import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';
import { MaterialSharedModule } from '../../shared/material-shared.module';
import { DogCardComponent } from './components/dog-card.component';
import { FishChipListComponent } from './components/fish-chip-list.component';
import { SharedModule } from '../../shared/shared.module';
import { FaqComponent } from './components/faq.component';


@NgModule({
  declarations: [
    DemoComponent,
    DogCardComponent,
    FishChipListComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    MaterialSharedModule,
    SharedModule
  ]
})
export class DemoModule { }
