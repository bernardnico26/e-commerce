import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        setAddWishlist: (state, action) => {
            const item = action.payload;
            if (!state.some(existingItem => existingItem.id === item.id)) {
                state.push({ ...item, isChecked: true });
            }
        },
        setRemoveWishlist: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { setAddWishlist, setRemoveWishlist } = wishlistSlice.actions;

export const setAddWishlistThunk = (data) => dispatch => {
    dispatch(setAddWishlist(data));
};

export const setRemoveWishlistThunk = (productId) => dispatch => {
    dispatch(setRemoveWishlist({ id: productId }));
};

export default wishlistSlice.reducer;


