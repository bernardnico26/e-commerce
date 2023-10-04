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
        .post("https://e-commerce-q5et.onrender.com/cart", data, getConfig())
        .then(()=>dispatch( getListProductThunk()))
        .catch(error=>console.error(error))
        .finally(() => dispatch(setIsLoading(false)))

}
export const getListProductThunk = () => dispatch =>{
    axios
        .get("https://e-commerce-q5et.onrender.com/cart", getConfig())
        .then(resp=> dispatch( setCartList(resp.data) ) )
        .catch(error => console.error(error))
        .finally(() => dispatch(setIsLoading(false)))
}
export const deleteProductThunk = (id) => (dispatch)=>{
    axios
        .delete(`https://e-commerce-q5et.onrender.com/cart/${id}`, getConfig())
        .then(()=>dispatch( getListProductThunk()))
        .catch(err => console.error(err))
}
export const modifyQuantityProduct = (id, data) => dispatch =>{
    dispatch(setIsLoading(true))

    const body = {
        quantity: data
    }

    axios
        .put(`https://e-commerce-q5et.onrender.com/cart/${id}`, body, getConfig())
        .then(()=>dispatch( getListProductThunk()))
        .catch(error => console.error(error))
        .finally(() => dispatch(setIsLoading(false)))
}



export const { setCartList } = cartList.actions;

export default cartList.reducer;