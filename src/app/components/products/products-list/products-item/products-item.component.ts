import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';
import { DeleteProduct } from 'src/app/ngrx/ngrxModels/deleteProduct';
import { SelectProduct } from 'src/app/ngrx/ngrxModels/selectProduct';
import { SetAvailableProduct } from 'src/app/ngrx/ngrxModels/setAvailableProduct';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  
  @Input()
  product!: Product;

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
  }

  onSelectProduct(product: Product){
    this.store.dispatch(new SelectProduct(product));
  }

  onSetAvailability(product: Product){
    this.store.dispatch(new SetAvailableProduct(product));
  }

  onDeleteProduct(product: Product){
    this.store.dispatch(new DeleteProduct(product));
  }

  onEditProduct(product: Product){
    this.router.navigateByUrl(`/editProduct/${product.id}`);
  }
}
