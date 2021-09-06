import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class GetSelectedProducts implements Action{ 
    type = ProductActionsTypes.SELECTED;
    constructor(public payload: any){
        
    }
}

export class GetSelectedProductsSuccess implements Action{ 
    type = ProductActionsTypes.SELECTED_SUCCESS;
    constructor(public payload: Product[]){
        
    }
}

export class GetSelectedProductsError implements Action{ 
    type = ProductActionsTypes.SELECT_ERROR;
    constructor(public payload: string){
        
    }
}