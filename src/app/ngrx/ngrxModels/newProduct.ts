import { Action } from "@ngrx/store";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class NewProduct implements Action{ 
    type = ProductActionsTypes.NEW_PRODUCT;
    constructor(public payload: any){
        
    }
}

export class NewProductSuccess implements Action{ 
    type = ProductActionsTypes.NEW_PRODUCT_SUCCESS;
    constructor(public payload: any){
        
    }
}

export class NewProductError implements Action{ 
    type = ProductActionsTypes.NEW_PRODUCT_ERROR;
    constructor(public payload: string){
        
    }
}