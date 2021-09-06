import { Product } from "src/app/model/product.model";
import { ProductsStateEnum } from "./product-state-enum";

export interface ProductsState{
    products: Product[],
    product?: Product,
    errorMessage: string,
    dataState: ProductsStateEnum
}