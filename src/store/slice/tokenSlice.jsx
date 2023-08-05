import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import saveLocalStora from '../../tools/saveLocalStora';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const tokenSlice = createSlice({
	name: 'tokenSlice',
    initialState: {},
    reducers: {
        setPostLogin: (state, actions)=>{
            axios
                .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", actions.payload)
                .then(resp=>saveLocalStora(resp.data))
                .catch(error=>console.error(error))
        },
        setPostRegister: (state, actions)=>{
            axios
                .post("https://e-commerce-api-v2.academlo.tech/api/v1/users", actions.payload)
                .then()
                .catch(error=> console.error(error))
        }
    }
})

export const { setPostLogin, setPostRegister } = tokenSlice.actions;

export default tokenSlice.reducer;