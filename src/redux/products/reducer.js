import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, ADD_PRODUCT_ORDER_FAILURE, ADD_PRODUCT_ORDER_REQUEST, ADD_PRODUCT_ORDER_SUCCESS, FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_ORDER_FAILURE, FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, REMOVE_FROM_ORDER_FAILURE, REMOVE_FROM_ORDER_REQUEST, REMOVE_FROM_ORDER_SUCCESS, REMOVE_PRODUCT_FROM_CART_FAILURE, REMOVE_PRODUCT_FROM_CART_REQUEST, REMOVE_PRODUCT_FROM_CART_SUCCESS } from "./actionTypes";

const initState = {
    products: [],
    error: "",
    loading: false,
    currentProduct: {},
    cart: [],
    orders:[],
}


export const getCartTotal = (cart) =>  
    cart?.reduce((amount,payload) => payload.price + amount,0 )
const reducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                products:payload
            }
        
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }
        
        
        // ***********************************For single Product*********************************************************

        case GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                
            }
        
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                currentProduct:payload
            }
        
        case GET_SINGLE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }
        
        
        
        // ***********************************For Cart*********************************************************

        case ADD_PRODUCT_CART_REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }
        
        case ADD_PRODUCT_CART_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                cart: [...state.cart, payload]

            }
        case ADD_PRODUCT_CART_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }
        
        case FETCH_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error : "",
            }
        
        case FETCH_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: [...payload],
            }
        case FETCH_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            }
        
        case REMOVE_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error:""
            }
        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                
            }
        case REMOVE_FROM_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }
        // ***********************************For Product Remove From Cart*********************************************************
        
        case REMOVE_PRODUCT_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error:""
            }
        case REMOVE_PRODUCT_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                
            }
        case REMOVE_PRODUCT_FROM_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }
        // ***********************************For Product Remove From Cart And Into Order Page*********************************************************
        
        case ADD_PRODUCT_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error:""
            }
        case ADD_PRODUCT_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                orders: [...state.orders, payload]
                
            }
        case ADD_PRODUCT_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }
        
        
        case FETCH_ORDER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders:[...payload]
            }
        
        case FETCH_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }
        
        case REMOVE_FROM_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error:""
            }
        case REMOVE_FROM_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                
            }
        case REMOVE_FROM_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error:payload
            }
        
        
        
        default:
            return state
    }
    
}

export default reducer