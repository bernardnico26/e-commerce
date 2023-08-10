import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../tools/getConfig';
import axios from 'axios';
import { setIsLoading } from './isLoading';

export const cartList = createSlice({
		name: 'cartList',
    initialState: [],
    reducers: {
        setCartList: (state, action) => {
            return action.payload
        },
    }
})

export const setAddCardThunk =(data)=> dispatch => {
    axios
        .post("https://e-commerce-api-v2.academlo.tech/api/v1/cart", data, getConfig())
        .then(()=>dispatch( getListProductThunk()))
        .catch(error=>console.error(error))
        .finally(() => dispatch(setIsLoading(false)))

}
export const getListProductThunk = () => dispatch =>{
    axios
        .get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
        .then(resp=> dispatch( setCartList(resp.data) ) )
        .catch(error => console.error(error))
        .finally(() => dispatch(setIsLoading(false)))
}
export const deleteProductThunk = (id) => (dispatch)=>{
    axios
        .delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, getConfig())
        .then(()=>dispatch( getListProductThunk()))
        .catch(err => console.error(err))
}
export const modifyQuantityProduct = (id, data) => dispatch =>{
    dispatch(setIsLoading(true))

    const body = {
        quantity: data
    }

    axios
        .put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, body, getConfig())
        .then(()=>dispatch( getListProductThunk()))
        .catch(error => console.error(error))
        .finally(() => dispatch(setIsLoading(false)))
}



export const { setCartList } = cartList.actions;

export default cartList.reducer;