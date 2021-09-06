import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EditProduct } from 'src/app/ngrx/ngrxModels/editProduct';
import { ProductsState } from 'src/app/ngrx/ngrxModels/product-state';
import { ProductsStateEnum } from 'src/app/ngrx/ngrxModels/product-state-enum';
import { SaveEditProduct } from 'src/app/ngrx/ngrxModels/saveEditProduct';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId: number;
  productEditFG!: FormGroup;
  state!: ProductsState;
  readonly productStateEnum = ProductsStateEnum;

  submitted = false;

  constructor(private fb: FormBuilder, private store: Store<any>, private activatedRoute: ActivatedRoute, private router: Router) 
  { 
    this.productId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProduct(this.productId));
    this.store.subscribe(state => {
      this.state = state.catalogState;

      if (this.state.dataState == ProductsStateEnum.EDIT) {        
        this.productEditFG = this.fb.group({
          id: [this.state.product?.id],
          name: [this.state.product?.name, Validators.required],
          price: [this.state.product?.price, Validators.required],
          quantity: [this.state.product?.quantity, Validators.required],
          selected: [this.state.product?.selected],
          available: [this.state.product?.available]
        });
      }
    });
  }

  onEditProduct() {
    this.submitted = true;

    if (this.productEditFG.valid) {
      this.store.dispatch(new SaveEditProduct(this.productEditFG.value));      
      
      alert(`The product \"${this.state.products.find(p => p.id == this.productId)?.name}\" is successfully updated :)`);

      this.submitted = false;

      this.router.navigateByUrl('/products');
    }
  }
}
