import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForyouComponent } from './foryou.component';

const routes: Routes = [{ path: '', component: ForyouComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForyouRoutingModule { }
