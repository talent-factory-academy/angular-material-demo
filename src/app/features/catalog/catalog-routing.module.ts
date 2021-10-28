import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { OffersComponent } from './pages/offers/offers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'foryou', loadChildren: () => import('./pages/foryou/foryou.module').then(m => m.ForyouModule) },
      { path: '', redirectTo: 'offers'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
