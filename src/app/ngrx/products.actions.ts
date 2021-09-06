import { AddProduct, AddProductError, AddProductSuccess } from "./ngrxModels/addProduct";
import { DeleteProduct, DeleteProductError, DeleteProductSuccess } from "./ngrxModels/deleteProduct";
import { EditProduct, EditProductSuccess, EditProductError } from "./ngrxModels/editProduct";
import { GetAllProducts, GetAllProductsError, GetAllProductsSuccess } from "./ngrxModels/getAllProducts";
import { GetAvailableProducts, GetAvailableProductsError, GetAvailableProductsSuccess } from "./ngrxModels/getAvailableProducts";
import { GetSelectedProducts, GetSelectedProductsError, GetSelectedProductsSuccess } from "./ngrxModels/getSelectedProducts";
import { NewProduct, NewProductSuccess, NewProductError } from "./ngrxModels/newProduct";
import { SaveEditProduct, SaveEditProductError, SaveEditProductSuccess } from "./ngrxModels/saveEditProduct";
import { SearchProducts, SearchProductsError, SearchProductsSuccess } from "./ngrxModels/searchProducts";
import { SelectProduct, SelectProductError, SelectProductSuccess } from "./ngrxModels/selectProduct";
import { SetAvailableProduct, SetAvailableProductError, SetAvailableProductSuccess } from "./ngrxModels/setAvailableProduct";

export type ProductsAction = GetAllProducts | GetAllProductsSuccess | GetAllProductsError;

export type SelectedProductAction = GetSelectedProducts | GetSelectedProductsSuccess | GetSelectedProductsError;

export type AvailableProductAction = GetAvailableProducts | GetAvailableProductsSuccess | GetAvailableProductsError;

export type SearchProductAction = SearchProducts | SearchProductsSuccess | SearchProductsError;

export type SelectProductAction = SelectProduct | SelectProductSuccess | SelectProductError;

export type SetAvailableProductAction = SetAvailableProduct | SetAvailableProductSuccess | SetAvailableProductError;

export type DeleteProductAction = DeleteProduct | DeleteProductSuccess | DeleteProductError;

export type AddProductAction = AddProduct | AddProductSuccess | AddProductError;

export type NewProductAction = NewProduct | NewProductSuccess | NewProductError;

export type EditProductAction = EditProduct | EditProductSuccess | EditProductError;

export type SaveEditProductAction = SaveEditProduct | SaveEditProductSuccess | SaveEditProductError;