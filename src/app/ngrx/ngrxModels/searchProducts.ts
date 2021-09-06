import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class SearchProducts implements Action{ 
    type = ProductActionsTypes.SEARCH;
    constructor(public payload: any){
        
    }
}

export class SearchProductsSuccess implements Action{ 
    type = ProductActionsTypes.SEARCH_SUCCESS;
    constructor(public payload: Product[]){
        
    }
}

export class SearchProductsError implements Action{ 
    type = ProductActionsTypes.SEARCH_ERROR;
    constructor(public payload: string){
        
    }
}