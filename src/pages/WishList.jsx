import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRemoveWishlistThunk } from '../store/slices/wishlist';

const WishList = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);

    const removeFromWishlist = (productId) => {
        dispatch(setRemoveWishlistThunk(productId));
    };

    return (
        <div>
            <h1>Wish List</h1>
            
            <ul>
                {wishlist.map((item) => (
                    <li key={item.id}>
                        <img src={item.images?.[0].url} alt="Product" />
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WishList;
