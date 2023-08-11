import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import saveLocalStora from '../../tools/saveLocalStora';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const tokenSlice = createSlice({
	name: 'tokenSlice',
    initialState: false,
    reducers: {
        setChangeValor: (state, actions)=>{
            const token = localStorage.getItem("userToken")
            if(token){
                return true
            }else{
                return false
            }
            
        }
    }
})
export const setPostLogin = (data) => (dispatch)=>{
            axios
                .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", data)
                .then(resp=>{saveLocalStora(resp.data), dispatch(setChangeValor())})
                .catch(error=>console.error(error))
        }

export const setPostRegister =(data)=> (dispatch)=>{
            axios
                .post("https://e-commerce-api-v2.academlo.tech/api/v1/users", data)
                .then()
                .catch(error=> console.error(error))
        }

export const { setChangeValor } = tokenSlice.actions;

export default tokenSlice.reducer;