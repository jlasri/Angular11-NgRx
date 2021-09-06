import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ProductsState } from 'src/app/ngrx/ngrxModels/product-state';
import { ProductsStateEnum } from 'src/app/ngrx/ngrxModels/product-state-enum';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsState$?: Observable<ProductsState>;

  readonly productStateEnum = ProductsStateEnum;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.productsState$ = this.store
                                .pipe(
                                  map((state: any) => state.catalogState)
                                );
  }
  
}
