import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddProduct } from 'src/app/ngrx/ngrxModels/addProduct';
import { NewProduct } from 'src/app/ngrx/ngrxModels/newProduct';
import { ProductsState } from 'src/app/ngrx/ngrxModels/product-state';
import { ProductsStateEnum } from 'src/app/ngrx/ngrxModels/product-state-enum';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFG!: FormGroup;
  state!: ProductsState;
  readonly productStateEnum = ProductsStateEnum;

  submitted = false;

  constructor(private fb: FormBuilder, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new NewProduct({}));
    this.store.subscribe(state => {
      this.state = state.catalogState;

      if (this.state.dataState == ProductsStateEnum.NEW) {
        this.productFG = this.fb.group({
          name: ["", Validators.required],
          price: ["", Validators.required],
          quantity: ["", Validators.required],
          selected: [false, Validators.required],
          available: [false, Validators.required]
        });
      }
    });
  }

  newProduct() {
    this.store.dispatch(new NewProduct({}));
  }

  onSaveProduct() {
    this.submitted = true;

    if (this.productFG.valid) {
      this.store.dispatch(new AddProduct(this.productFG.value));

      this.submitted = false;
    }
  }
}
