import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './views/products/add-product/add-product.component';
import { ListProductsComponent } from './views/products/list-products/list-products.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'novo-produto', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
