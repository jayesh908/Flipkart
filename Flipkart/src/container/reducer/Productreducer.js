import { ActionType } from "../contents/Actiontype";

const intialstate = {
    product : [{
        id:1,
        title : "Dipesh",
        category:"programmer"
    }]  
}
export const productreducer = (state=intialstate,{type,payload})=>{
        switch (type) {
            case ActionType.SET_PRODUCTS:
                    return {...state,product:payload}
           
        
            default:
                return state    
        }
}

// export const selectedproductReducer = (state={},{type,payload})=>{
//             switch (type) {
//                 case ActionType:SELECTED_PRODUCT
//                         return[...state,...payload]
//                     break;
            
//                 default:
//                     break;
//             }
// }