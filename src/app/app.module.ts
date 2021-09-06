import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductNavComponent } from './components/product-nav/product-nav.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productsReducer } from './ngrx/products.reducer';
import { ProductsEffect } from './ngrx/products.effects';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsItemComponent } from './components/products/products-list/products-item/products-item.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { HomeComponent } from './components/home/home.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductNavComponent,
    ProductsListComponent,
    ProductsItemComponent,
    AddProductComponent,
    HomeComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({catalogState: productsReducer}),
    EffectsModule.forRoot([ProductsEffect]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
