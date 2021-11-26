// import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './App.css';

export default function Item({ cartValue, setCart, item_id, item_name, item_pic, item_price }) {
  const [btnclick, setClick] = useState(true);
  return (
    <div className="item_container" key={item_id}>
      <div className="image_container">
        <img className="Item_image" alt={item_name} src={item_pic}></img>
      </div>
      <div className="product_detail_con">
        <h1 className="item_name">{item_name}</h1>
        <div className="price_btn_container">
          <p className="item_price">₹{item_price}</p>
          {btnclick ?
            <Button className="Addtocartbtn" variant="outlined" onClick={() => { setCart(cartValue + 1); setClick(!btnclick); }} startIcon={<AddShoppingCartIcon />}>
              Add to Cart
            </Button> :
            <Button className="Addtocartbtn" color="error" variant="outlined" onClick={() => { setCart(cartValue - 1); setClick(!btnclick); }} startIcon={<RemoveShoppingCartIcon />}>
              Remove from Cart
            </Button>}
        </div>
      </div>
    </div>
  );
}
