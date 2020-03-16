import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT
} from './productTypes'

const initialState = {
    loading: false,
    product: [],
    error: '',
    totalOrder:0
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
                totalOrder : state.totalOrder + 1


            }

        case DECREMENT_PRODUCT:

            if(state.totalOrder > 0){
                return {
                    ...state,
                    totalOrder : state.totalOrder - 1
                }
            }

        default: return state
    }
}

export default reducer
