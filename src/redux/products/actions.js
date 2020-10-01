import Axios from 'axios'

import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAILED
} from './constans'

export const fetchData = ()=>(dispatch)=>{
    dispatch({
        type: FETCH_DATA
    })
    Axios.get(process.env.REACT_APP_API_URL+"/products")
        .then(res=>{
            dispatch(fetchSucces(res.data))
        })
        .catch(err=>{
            dispatch(fetchFailed(err))
        })
}
export const fetchFailed = (err)=>(dispatch)=>{
    dispatch({
        type: FETCH_FAILED,
        error: err
    })
}
export const fetchSucces = (data)=>(dispatch)=>{
    dispatch({
        type: FETCH_SUCCESS,
        payload: data
    })
}

export const addProduct = (product)=> (dispatch)=> {
    Axios.post(process.env.REACT_APP_API_URL+"/products",{
        product
    })
        .then(()=>{
            dispatch(fetchData())
        })
        .catch(()=> {
            dispatch(fetchFailed())
        })
}

export const editProduct = (product, cb=()=>{})=> (dispatch)=> {
    Axios.patch(process.env.REACT_APP_API_URL+"/products/"+product.id,{
        product
    })
        .then(()=>{
            dispatch(fetchData())
            cb()
        })
        .catch(()=> {
            dispatch(fetchFailed())
        })
}

export const deleteProduct = (id, cb=()=>{})=> (dispatch)=> {
    Axios.delete(process.env.REACT_APP_API_URL+"/products/"+id)
        .then(()=> {
            dispatch(fetchData())
            cb()
        })
        .catch((err)=> {
            dispatch(fetchFailed(err))
        })
}