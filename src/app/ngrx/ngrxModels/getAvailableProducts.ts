import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class GetAvailableProducts implements Action{ 
    type = ProductActionsTypes.AVAILABLE;
    constructor(public payload: any){
        
    }
}

export class GetAvailableProductsSuccess implements Action{ 
    type = ProductActionsTypes.AVAILABLE_SUCCESS;
    constructor(public payload: Product[]){
        
    }
}

export class GetAvailableProductsError implements Action{ 
    type = ProductActionsTypes.AVAILABLE_ERROR;
    constructor(public payload: string){
        
    }
}