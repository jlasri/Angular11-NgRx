import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class AddProduct implements Action{ 
    type = ProductActionsTypes.ADD_PRODUCT;
    constructor(public payload: any){
        
    }
}

export class AddProductSuccess implements Action{ 
    type = ProductActionsTypes.ADD_PRODUCT_SUCCESS;
    constructor(public payload: Product){
        
    }
}

export class AddProductError implements Action{ 
    type = ProductActionsTypes.ADD_PRODUCT_ERROR;
    constructor(public payload: string){
        
    }
}