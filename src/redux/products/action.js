import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, ADD_PRODUCT_ORDER_FAILURE, ADD_PRODUCT_ORDER_REQUEST, ADD_PRODUCT_ORDER_SUCCESS, FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, REMOVE_PRODUCT_FROM_CART_FAILURE, REMOVE_PRODUCT_FROM_CART_REQUEST, REMOVE_PRODUCT_FROM_CART_SUCCESS } from "./actionTypes"

import Axios from "axios";


const fetchDataRequest = (payload) => {
    return {
        type: FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess = (payload) => {

    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
    
}

const fetchDataFailure = (payload) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload
    }
}

export const fetchdata = (payload) => {

    return (dispatch) => {
        dispatch(fetchDataRequest())
        Axios.get('/products', {
            params: {
                ...payload
            }
        })
            .then(res => dispatch(fetchDataSuccess(res.data)))
            .catch(e => dispatch(fetchDataFailure(e.data)))
    };
};






// ***********************************For single Product*********************************************************

const getSingleProductRequest = (payload) => {
    return {
        type: GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}

const getSingleProductSuccess = (payload) => {

    return {
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
    
}

const getSingleProductFailure = (payload) => {
    return {
        type: GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}



export const getSingleProduct = (id) => {

    return (dispatch) => {
        dispatch(getSingleProductRequest())
        Axios.get(`/products/${id}`)
            .then(res => dispatch(getSingleProductSuccess(res.data)))
            .catch(e => dispatch(getSingleProductFailure(e.data)))
            
    };
};



// ***********************************For Cart*********************************************************


const addProductCartRequest = (payload) => {
    return {
        type: ADD_PRODUCT_CART_REQUEST,
        payload
    }
}

const addProductCartSuccess = (payload) => {

    return {
        type: ADD_PRODUCT_CART_SUCCESS,
        payload
    }
    
}

const addProductCartFailure = (payload) => {
    return {
        type: ADD_PRODUCT_CART_FAILURE,
        payload
    }
}




export const addProductCart = (product) => dispatch => {
    dispatch(addProductCartRequest())

    Axios.post('/cart', product)
        .then(res => dispatch(addProductCartSuccess(res.data)))
    .then(res => dispatch(addProductCartFailure(res.data)))
}





// *****************************Fetch Cart*********************************************************

const fetchCartRequest = (payload) => {
    return {
        type: FETCH_CART_REQUEST,
        payload
    }
}

const fetchCartSuccess = (payload) => {

    return {
        type: FETCH_CART_SUCCESS,
        payload
    }
    
}

const fetchCartFailure = (payload) => {
    return {
        type: FETCH_CART_FAILURE,
        payload
    }
}

export const fetchCart = () => dispatch => { 
    dispatch(fetchCartRequest())
    Axios.get('/cart').then(res => dispatch(fetchCartSuccess(res.data)))
    .catch(e => dispatch(fetchCartFailure(e.data)))
}



// *****************************************Remove Item From Cart *************************************
const removeProductFromCartRequest = (payload) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART_REQUEST,
        payload
    }
}

const removeProductFromCartSuccess = (payload) => {

    return {
        type: REMOVE_PRODUCT_FROM_CART_SUCCESS,
        payload
    }
    
}

const removeProductFromCartFailure = (payload) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART_FAILURE,
        payload
    }
}

export const removeProductFromCart = (id) => dispatch => { 
    dispatch(removeProductFromCartRequest())
    Axios.delete(`/cart/${id}`)
        .then(res => dispatch(removeProductFromCartSuccess(res.data)))
        .then(()=> dispatch(fetchCart()))
    .catch(e => dispatch(removeProductFromCartFailure(e.data)))
}
// *****************************************Remove Item From Cart AND SEND TO ORDER *************************************
const removeFromCartRequest = (payload) => {
    return {
        type: REMOVE_FROM_CART_REQUEST,
        payload
    }
}

const removeFromCartSuccess = (payload) => {

    return {
        type: REMOVE_FROM_CART_SUCCESS,
        payload
    }
    
}

const removeFromCartFailure = (payload) => {
    return {
        type: REMOVE_FROM_CART_FAILURE,
        payload
    }
}

export const removeFromCart = (id) => dispatch => { 
    dispatch(removeFromCartRequest())
    Axios.delete(`/cart/${id}`)
        .then(res => dispatch(removeFromCartSuccess(res.data)))
        .then(()=> dispatch(fetchCart()))
    .catch(e => dispatch(removeFromCartFailure(e.data)))
}



// *****************************************Send Order *************************************

const addProductOrderRequest = (payload) => {
    return {
        type: ADD_PRODUCT_ORDER_REQUEST,
        payload
    }
}

const addProductOrderSuccess = (payload) => {

    return {
        type: ADD_PRODUCT_ORDER_SUCCESS,
        payload
    }
    
}

const addProductOrderFailure = (payload) => {
    return {
        type: ADD_PRODUCT_ORDER_FAILURE,
        payload
    }
}




export const addProductOrder = (product) => dispatch => {
    dispatch(addProductOrderRequest())

    Axios.post('/order', product)
        .then(res => dispatch(addProductOrderSuccess(res.data)))
    .then(res => dispatch(addProductOrderFailure(res.data)))
}





























// export { fetchdata };
