export enum ProductActionsTypes {
    //// Product Nav
    // Get all product
    ALL = "Get all products",
    ALL_SUCCESS = "Get all products success",
    ALL_ERROR = "Get all products error",
    // Selected products
    SELECTED = "Get selected products",
    SELECTED_SUCCESS = "Get selected products success",
    SELECTED_ERROR = "Get selected products error",
    // Available products
    AVAILABLE = "Get available products",
    AVAILABLE_SUCCESS = "Get available products success",
    AVAILABLE_ERROR = "Get available products error",
    //Search
    SEARCH = "Search products",
    SEARCH_SUCCESS = "Search products success",
    SEARCH_ERROR = "Search products error",
    //// Product List
    // On select
    SELECT = "On select product",
    SELECT_SUCCESS = "On select product success",
    SELECT_ERROR = "On select product error",
    // On edit
    EDIT = "On edit product",
    EDIT_SUCCESS = "On edit product success",
    EDIT_ERROR = "On edit product error",
    // On save edit
    SAVE_EDIT = "On save edit product",
    SAVE_EDIT_SUCCESS = "On save edit product success",
    SAVE_EDIT_ERROR = "On save edit product error",
    // On create
    ADD_PRODUCT = "On create product",
    ADD_PRODUCT_SUCCESS = "On create product success",
    ADD_PRODUCT_ERROR = "On create product error",
    // On initialize adding product
    NEW_PRODUCT = "On create product init",
    NEW_PRODUCT_SUCCESS = "On create product success init",
    NEW_PRODUCT_ERROR = "On create product error init",
    // On delete
    DELETE = "On delete product",
    DELETE_SUCCESS = "On delete product success",
    DELETE_ERROR = "On delete product error",
    // On set available
    SET_AVAILAIBILITY = "Set product availaibility",
    SET_AVAILAIBILITY_SUCCESS = "Set product availaibility success",
    SET_AVAILAIBILITY_ERROR = "Set product availaibility error"
}