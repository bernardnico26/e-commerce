import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const articlesSlice = createSlice({
		name: 'articles',
    initialState: [],
    reducers: {
            setArticles: (state, action) =>{
                return action.payload
            }
        }
    
})

export const getArticlesThunk = () => (dispatch) => {

    axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products`)
    .then(resp => dispatch(setArticles(resp.data)))
    .catch(error => console.error(error))
}

export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;