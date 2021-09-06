import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class GetAllProducts implements Action{ 
    type = ProductActionsTypes.ALL;
    constructor(public payload: any){
        
    }
}

export class GetAllProductsSuccess implements Action{ 
    type = ProductActionsTypes.ALL_SUCCESS;
    constructor(public payload: Product[]){
        
    }
}

export class GetAllProductsError implements Action{ 
    type = ProductActionsTypes.ALL_ERROR;
    constructor(public payload: string){
        
    }
}