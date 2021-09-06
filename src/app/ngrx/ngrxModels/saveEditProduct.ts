import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { ProductActionsTypes } from "./ProductActionsTypesEnum";

export class SaveEditProduct implements Action{ 
    type = ProductActionsTypes.SAVE_EDIT;
    constructor(public payload: any){
        
    }
}

export class SaveEditProductSuccess implements Action{ 
    type = ProductActionsTypes.SAVE_EDIT_SUCCESS;
    constructor(public payload: Product){
        
    }
}

export class SaveEditProductError implements Action{ 
    type = ProductActionsTypes.SAVE_EDIT_ERROR;
    constructor(public payload: string){
        
    }
}