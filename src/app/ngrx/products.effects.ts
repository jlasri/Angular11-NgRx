import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Product } from "../model/product.model";
import { ProductService } from "../services/product.service";
import { AddProductError, AddProductSuccess } from "./ngrxModels/addProduct";
import { DeleteProductError, DeleteProductSuccess } from "./ngrxModels/deleteProduct";
import { EditProductError, EditProductSuccess } from "./ngrxModels/editProduct";
import { GetAllProductsError, GetAllProductsSuccess } from "./ngrxModels/getAllProducts";
import { GetAvailableProductsError, GetAvailableProductsSuccess } from "./ngrxModels/getAvailableProducts";
import { GetSelectedProductsError, GetSelectedProductsSuccess } from "./ngrxModels/getSelectedProducts";
import { NewProductSuccess } from "./ngrxModels/newProduct";
import { ProductActionsTypes } from "./ngrxModels/ProductActionsTypesEnum";
import { SaveEditProductError, SaveEditProductSuccess } from "./ngrxModels/saveEditProduct";
import { SearchProductsError, SearchProductsSuccess } from "./ngrxModels/searchProducts";
import { SelectProductError, SelectProductSuccess } from "./ngrxModels/selectProduct";
import { SetAvailableProductError, SetAvailableProductSuccess } from "./ngrxModels/setAvailableProduct";
import { AddProductAction, AvailableProductAction, DeleteProductAction, EditProductAction, NewProductAction, ProductsAction, SaveEditProductAction, SearchProductAction, SelectedProductAction, SelectProductAction, SetAvailableProductAction } from "./products.actions";

@Injectable()
export class ProductsEffect {
    constructor(private pService$: ProductService, private effectActions$: Actions) { }

    // Get All Products
    getAllProductsEffect$: Observable<ProductsAction> = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.ALL),
                mergeMap((action: ProductsAction) => {
                    return this.pService$.getProducts()
                        .pipe(
                            map((data: Product[]) => new GetAllProductsSuccess(data)),
                            catchError((err) => of(new GetAllProductsError(err.message)))
                        )
                })
            )
    );

    // Get Selected Products
    getSelectedProductsEffect$: Observable<SelectedProductAction> = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.SELECTED),
                mergeMap((action: SelectedProductAction) => {
                    return this.pService$.getSelectedProducts()
                        .pipe(
                            map((data: Product[]) => new GetSelectedProductsSuccess(data)),
                            catchError((err) => of(new GetSelectedProductsError(err.message)))
                        )
                })
            )
    );

    // Get Available Products
    getAvailableProductsEffect$: Observable<AvailableProductAction > = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.AVAILABLE),
                mergeMap((action: AvailableProductAction) => {
                    return this.pService$.getAvailableProducts()
                        .pipe(
                            map((data: Product[]) => new GetAvailableProductsSuccess(data)),
                            catchError((err) => of(new GetAvailableProductsError(err.message)))
                        )
                })
            )
    );

    // Search Products
    searchProductsEffect$: Observable<SearchProductAction > = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.SEARCH),
                mergeMap((action: SearchProductAction) => {
                    return this.pService$.searchProducts(action.payload)
                        .pipe(
                            map((data: Product[]) => new SearchProductsSuccess(data)),
                            catchError((err) => of(new SearchProductsError(err.message)))
                        )
                })
            )
    );

    // Select Products
    selectProductsEffect$: Observable<SelectProductAction > = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.SELECT),
                mergeMap((action: SelectProductAction) => {
                    return this.pService$.setSelected(action.payload)
                        .pipe(
                            map((data: Product) => new SelectProductSuccess(data)),
                            catchError((err) => of(new SelectProductError(err.message)))
                        )
                })
            )
    );

    // Set product availability
    setAvailabilityEffect$: Observable<SetAvailableProductAction> = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.SET_AVAILAIBILITY),
                mergeMap((action: SetAvailableProductAction) => {
                    return this.pService$.setAvailaibility(action.payload)
                        .pipe(
                            map((data: Product) => new SetAvailableProductSuccess(data)),
                            catchError((err) => of(new SetAvailableProductError(err.message)))
                        )
                })
            )
    );

    // Delete product
    deleteProductEffect$: Observable<DeleteProductAction> = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.DELETE),
                mergeMap((action: DeleteProductAction) => {
                    return this.pService$.delete(action.payload.id)
                        .pipe(
                            map(() => new DeleteProductSuccess(action.payload)),
                            catchError((err) => of(new DeleteProductError(err.message)))
                        )
                })
            )
    );

    // New product init
    newProductEffect$: Observable<NewProductAction> = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.NEW_PRODUCT),
                map(() => {
                    return new NewProductSuccess({});
                })
            )
    );

    // Create product
    addProductEffect$: Observable<AddProductAction> = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.ADD_PRODUCT),
                mergeMap((action: AddProductAction) => {
                    return this.pService$.save(action.payload)
                        .pipe(
                            map((product) => new AddProductSuccess(product)),
                            catchError((err) => of(new AddProductError(err.message)))
                        )
                })
            )
    );

    // Edit product init
    editProductEffect$: Observable<EditProductAction> = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.EDIT),
                mergeMap((action: EditProductAction) => {
                    return this.pService$.getProductById(action.payload)
                        .pipe(
                            map((product) => new EditProductSuccess(product)),
                            catchError((err) => of(new EditProductError(err.message)))
                        )
                })
            )
    );

    // Save Edit product
    saveEditProductEffect$: Observable<SaveEditProductAction> = createEffect(() =>
        this.effectActions$
            .pipe(
                ofType(ProductActionsTypes.SAVE_EDIT),
                mergeMap((action: SaveEditProductAction) => {
                    return this.pService$.update(action.payload)
                        .pipe(
                            map((product) => new SaveEditProductSuccess(product)),
                            catchError((err) => of(new SaveEditProductError(err.message)))
                        )
                })
            )
    );

}