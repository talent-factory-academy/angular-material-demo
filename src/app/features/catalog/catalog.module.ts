import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ProductsComponent } from './pages/products/products.component';
import { OffersComponent } from './pages/offers/offers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MaterialSharedModule } from '../../shared/material-shared.module';


@NgModule({
  declarations: [
    CatalogComponent,
    ProductsComponent,
    OffersComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
