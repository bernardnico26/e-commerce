import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { setAddWishlistThunk } from "../store/slices/wishlist";
import { setAddCardThunk } from "../store/slices/cartList";

function ArticleCard({ data }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishlist);

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
};

const addToWishlist = () => {
  const item = { ...data, isChecked: true };
  dispatch(setAddWishlistThunk(item));
};

const addToCart = () => {
  const cartItem = wishlist.find((item) => item.id === data.id);
  if (cartItem) {
      const data = {
          quantity: 1,
          productId: data.id,
      };
      dispatch(setAddCardThunk(data));
  }
};

const removeFromWishlist = () => {
  dispatch(setRemoveWishlistThunk(data.id));
};

  return (
    <Card
    style={{ height: "100%"}}
    >
      <div style={{width:"100%",maxHeight:"210px"}}>
      <div>
                <label>
                <input
                    type="checkbox"
                    checked={data.isChecked} // Usar isChecked del artículo
                    onChange={() => {
                        if (data.isChecked) {
                            removeFromWishlist();
                        } else {
                            addToWishlist();
                        }
                    }}
                />
                    Add to Wishlist
                </label>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        <Card.Img
        variant="top"
        src={data.images?.[0].url}
        style={{ height:"100%",objectFit:"contain"}}/>
      </div>
      
      <Card.Body style={{display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle>{data.price}</Card.Subtitle>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <Button onClick={()=>navigate(`/articles/${data.id}`)} style={{width:"44%"}} className='buthover'><i className='bx bx-detail bx-sm' ></i></Button>
          <Button onClick={() => addToCart(data.id)} style={{width:"44%"}} className='buthover'> <i className='bx bxs-cart-alt bx-sm' ></i></Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;