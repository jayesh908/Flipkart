import { ActionType } from "../contents/Actiontype";
export const setproducts = (products)=>{
    return{
        type : ActionType.SET_PRODUCTS,
        payload:products,
    }
}

export const selectedproduct = (product)=>{
    return{
        type : ActionType.SELECTED_PRODUCT,
        payload:product
    }
};