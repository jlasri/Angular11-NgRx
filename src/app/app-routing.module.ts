import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "addProduct", component: AddProductComponent },
  { path: "editProduct/:id", component: EditProductComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
