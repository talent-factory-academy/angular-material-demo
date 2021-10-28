import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from './components/separator.component';
import { MaterialSharedModule } from './material-shared.module';



@NgModule({
  declarations: [
    SeparatorComponent
  ],
  exports: [
    SeparatorComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule
  ]
})
export class SharedModule { }
