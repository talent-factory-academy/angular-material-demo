import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForyouRoutingModule } from './foryou-routing.module';
import { ForyouComponent } from './foryou.component';


@NgModule({
  declarations: [
    ForyouComponent
  ],
  imports: [
    CommonModule,
    ForyouRoutingModule
  ]
})
export class ForyouModule { }
