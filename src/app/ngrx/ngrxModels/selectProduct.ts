import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class SelectProduct implements Action{ 
    type = ProductActionsTypes.SELECT;
    constructor(public payload: any){
        
    }
}

export class SelectProductSuccess implements Action{ 
    type = ProductActionsTypes.SELECT_SUCCESS;
    constructor(public payload: Product){
        
    }
}

export class SelectProductError implements Action{ 
    type = ProductActionsTypes.SELECT_ERROR;
    constructor(public payload: string){
        
    }
}