import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT,
    BUY_PRODUCT
} from './productTypes'

const initialState = {
    loading: false,
    product: [],
    error: '',
    totalOrder:0,
    selectedProduct:[]
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,

            }

        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: '',

            }

        case FETCH_PRODUCT_FAILURE:
            return {
                loading: false,
                product: [],
                error: action.payload,
                totalOrder:0
            }

        case INCREMENT_PRODUCT:

            return {
                ...state,
                totalOrder : state.totalOrder + 1,
                selectedProduct:state.selectedProduct.concat(action.selectedProduct)

            }

        case DECREMENT_PRODUCT:

            if(state.totalOrder > 0){
                return {
                    ...state,
                    totalOrder : state.totalOrder - 1
                }
            }

        case  BUY_PRODUCT:
            return {
                ...state,
                totalOrder:0,
                selectedProduct:[]
            }

        default: return state
    }
}

export default reducer
