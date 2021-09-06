import { Action } from "@ngrx/store";
import { ProductsState } from "./ngrxModels/product-state";
import { ProductsStateEnum } from "./ngrxModels/product-state-enum";
import { ProductActionsTypes } from "./ngrxModels/ProductActionsTypesEnum";
import { AddProductAction, AvailableProductAction, DeleteProductAction, EditProductAction, NewProductAction, ProductsAction, SaveEditProductAction, SearchProductAction, SelectedProductAction, SelectProductAction, SetAvailableProductAction } from "./products.actions";

const initState: ProductsState = {
    products: [],
    errorMessage: '',
    dataState: ProductsStateEnum.INITIAL
}

export function productsReducer(state: ProductsState = initState, action: Action): ProductsState {
    switch (action.type) {
        // Get All products
        case ProductActionsTypes.ALL: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.ALL_SUCCESS: return { ...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsAction>action).payload };
        case ProductActionsTypes.ALL_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsAction>action).payload };

        // Get Selected products
        case ProductActionsTypes.SELECTED: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.SELECTED_SUCCESS: return { ...state, dataState: ProductsStateEnum.LOADED, products: (<SelectedProductAction>action).payload };
        case ProductActionsTypes.SELECTED_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<SelectedProductAction>action).payload };

        // Get Available products
        case ProductActionsTypes.AVAILABLE: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.AVAILABLE_SUCCESS: return { ...state, dataState: ProductsStateEnum.LOADED, products: (<AvailableProductAction>action).payload };
        case ProductActionsTypes.AVAILABLE_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<AvailableProductAction>action).payload };

        // Search products
        case ProductActionsTypes.SEARCH: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.SEARCH_SUCCESS: return { ...state, dataState: ProductsStateEnum.LOADED, products: (<SearchProductAction>action).payload };
        case ProductActionsTypes.SEARCH_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<SearchProductAction>action).payload };

        // Select product
        case ProductActionsTypes.SELECT: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.SELECT_SUCCESS:
            // Replace the product in the product list
            let product = (<SelectProductAction>action).payload;
            let result = state.products.map(p => p.id === (product.id) ? product : p);

            return { ...state, dataState: ProductsStateEnum.LOADED, products: result };

        case ProductActionsTypes.SELECT_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<SelectProductAction>action).payload };

        // Set product availability 
        case ProductActionsTypes.SET_AVAILAIBILITY: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.SET_AVAILAIBILITY_SUCCESS:
            // Replace the product in the product list
            let productAvailable = (<SetAvailableProductAction>action).payload;
            let AvailabilityResult = state.products.map(p => p.id === (productAvailable.id) ? productAvailable : p);

            return { ...state, dataState: ProductsStateEnum.LOADED, products: AvailabilityResult };
        case ProductActionsTypes.SET_AVAILAIBILITY_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<SetAvailableProductAction>action).payload };

        // Delete product
        case ProductActionsTypes.DELETE: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.DELETE_SUCCESS:
            let productToDelete = (<DeleteProductAction>action).payload;
            let index = state.products.indexOf(productToDelete);
            let postDeleteList = [...state.products];
            postDeleteList.splice(index, 1);
            return { ...state, dataState: ProductsStateEnum.LOADED, products: postDeleteList };
        case ProductActionsTypes.DELETE_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<DeleteProductAction>action).payload };

        // New product init
        case ProductActionsTypes.NEW_PRODUCT: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.NEW_PRODUCT_SUCCESS: return { ...state, dataState: ProductsStateEnum.NEW };
        case ProductActionsTypes.NEW_PRODUCT_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<NewProductAction>action).payload };

        // Add product
        case ProductActionsTypes.ADD_PRODUCT: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.ADD_PRODUCT_SUCCESS:
            let postAddList = [...state.products];
            let productToAdd = (<AddProductAction>action).payload;
            postAddList.push(productToAdd);
            return { ...state, dataState: ProductsStateEnum.LOADED, products: postAddList };
        case ProductActionsTypes.ADD_PRODUCT_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<AddProductAction>action).payload };

        // Edit product init
        case ProductActionsTypes.EDIT: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.EDIT_SUCCESS:         
            let productToUpdate = (<EditProductAction>action).payload;
            return { ...state, dataState: ProductsStateEnum.EDIT, product: productToUpdate };
        case ProductActionsTypes.EDIT_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<EditProductAction>action).payload };

        // Save Edit product
        case ProductActionsTypes.SAVE_EDIT: return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductActionsTypes.SAVE_EDIT_SUCCESS:            
            // Replace the product in the product list
            let editedProduct = (<SaveEditProductAction>action).payload;
            let editedProducts = state.products.map(p => p.id === (editedProduct.id) ? editedProduct : p);
            return { ...state, dataState: ProductsStateEnum.LOADED, products: editedProducts };
        case ProductActionsTypes.ADD_PRODUCT_ERROR: return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<AddProductAction>action).payload };
        default: return { ...state };
    }
}