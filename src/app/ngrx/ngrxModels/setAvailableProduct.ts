import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class SetAvailableProduct implements Action{ 
    type = ProductActionsTypes.SET_AVAILAIBILITY;
    constructor(public payload: any){
        
    }
}

export class SetAvailableProductSuccess implements Action{ 
    type = ProductActionsTypes.SET_AVAILAIBILITY_SUCCESS;
    constructor(public payload: Product){
        
    }
}

export class SetAvailableProductError implements Action{ 
    type = ProductActionsTypes.SET_AVAILAIBILITY_ERROR;
    constructor(public payload: string){
        
    }
}