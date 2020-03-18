import axios from 'axios'
import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT,
    BUY_PRODUCT
} from './productTypes'

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                // response.data is the users
                const users = response.data
                dispatch(fetchProductsSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchProductsFailure(error.message))
            })
    }
}

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductsSuccess = users => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: users,

    }
}

export const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

export const incrementProduct = (item) => {

    return {
        type: INCREMENT_PRODUCT,
        selectedProduct: {
            item: item,
            qty: 1
        }
    }
}

export const decrementProduct = () => {
    return {
        type: DECREMENT_PRODUCT,

    }
}

export const buyProduct = () => {
    return {
        type: BUY_PRODUCT,

    }
}