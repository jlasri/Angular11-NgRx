import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class DeleteProduct implements Action{ 
    type = ProductActionsTypes.DELETE;
    constructor(public payload: any){
        
    }
}

export class DeleteProductSuccess implements Action{ 
    type = ProductActionsTypes.DELETE_SUCCESS;
    constructor(public payload: Product){
        
    }
}

export class DeleteProductError implements Action{ 
    type = ProductActionsTypes.DELETE_ERROR;
    constructor(public payload: string){
        
    }
}