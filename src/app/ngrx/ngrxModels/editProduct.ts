import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class EditProduct implements Action{ 
    type = ProductActionsTypes.EDIT;
    constructor(public payload: any){
        
    }
}

export class EditProductSuccess implements Action{ 
    type = ProductActionsTypes.EDIT_SUCCESS;
    constructor(public payload: Product){
        
    }
}

export class EditProductError implements Action{ 
    type = ProductActionsTypes.EDIT_ERROR;
    constructor(public payload: string){
        
    }
}