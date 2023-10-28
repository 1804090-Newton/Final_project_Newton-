import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', component: DataTableComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: DataTableComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'products/create', component: CreateProductComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'my-cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
