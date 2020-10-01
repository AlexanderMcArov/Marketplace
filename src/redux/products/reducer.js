import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAILED
} from './constans'

const INIT_STATE = {
    data: [],
    loading: false,
    error: null
}

const ProductsReducer = (state = INIT_STATE, action)=> {
    switch (action.type) {
        case FETCH_DATA:
            return {...state, loading: true}
        case FETCH_SUCCESS:
            return {...state, 
                loading: false, 
                data: action.payload,
                error: null}
        case FETCH_FAILED:
            return {...state,
                loading: false,
                data: [],
                error: action.payload}
    
        default:
            return state
    }
}

export default ProductsReducer