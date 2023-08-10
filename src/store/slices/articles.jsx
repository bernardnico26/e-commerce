import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {setIsLoading} from './isLoading'

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

    dispatch(setIsLoading(true));
    axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products`)
    .then(resp => dispatch(setArticles(resp.data)))
    .catch(error => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
}

export const filterArticlesByCategoryThunk = (id) => (dispatch) => {

    dispatch(setIsLoading(true));
    axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
    .then(resp => dispatch(setArticles(resp.data)))
    .catch(error => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
}

export const searchArticlesThunk = (searchTerm) => (dispatch) => {
    dispatch(setIsLoading(true));
    
    axios
        .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${searchTerm}`)
        .then(resp => {
            dispatch(setArticles(resp.data));
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            dispatch(setIsLoading(false));
        });
};

export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;