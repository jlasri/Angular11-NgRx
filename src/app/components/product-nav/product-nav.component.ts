import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetAllProducts } from 'src/app/ngrx/ngrxModels/getAllProducts';
import { GetAvailableProducts } from 'src/app/ngrx/ngrxModels/getAvailableProducts';
import { GetSelectedProducts } from 'src/app/ngrx/ngrxModels/getSelectedProducts';
import { SearchProducts } from 'src/app/ngrx/ngrxModels/searchProducts';

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.css']
})
export class ProductNavComponent implements OnInit {

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
  }
  getAllProducts() {
    this.store.dispatch(new GetAllProducts({}));
  }

  getSelectedProducts() {
    this.store.dispatch(new GetSelectedProducts({}));
  }

  getAvailableProducts() {
    this.store.dispatch(new GetAvailableProducts({}));
  }

  addProduct() {
    this.router.navigateByUrl('/addProduct');
  }

  onSearch(value: any) {
    this.store.dispatch(new SearchProducts(value.keyword))
  }
}
