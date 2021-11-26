import './App.css';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import IconButton from '@mui/material/IconButton';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Item from './Item'
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
// import Item2 from './Item2'

function App() {
  const itemList = [
    {
      id: 1,
      item_name: "Redmi 8A Dual (Sky White, 32 GB)  (3 GB RAM)",
      item_pic: "https://rukminim1.flixcart.com/image/416/416/k6tniq80/mobile/v/z/j/mi-redmi-8a-dual-b07x1ktaa-original-imafp73gqsrtspkk.jpeg?q=70",
      item_price: 8199
    },
    {
      id: 2,
      item_name: "Mi 11 Lite (Jazz Blue, 128 GB)  (6 GB RAM)",
      item_pic: "https://rukminim1.flixcart.com/image/416/416/kq6yefk0/mobile/i/w/m/11-lite-m2101k9ai-mi-original-imag496gkgqjrvvg.jpeg?q=70",
      item_price: 15985
    },
    {
      id: 3,
      item_name: "Xiaomi 11Lite NE (Vinyl Black, 128 GB)  (6 GB RAM)",
      item_pic: "https://rukminim1.flixcart.com/image/416/416/kua4r680/mobile/n/1/g/11lite5g-11-lite-ne-5g-redmi-original-imag7f6chqmz5hzd.jpeg?q=70",
      item_price: 25985
    },
    {
      id: 4,
      item_name: "vivo V21e (Sunset Jazz, 128 GB)  (8 GB RAM)",
      item_pic: "https://rukminim1.flixcart.com/image/416/416/kq9ta4w0/mobile/w/m/a/v21e-pd2102-vivo-original-imag4bcnur8gmmfj.jpeg?q=70",
      item_price: 24829
    },
    {
      id: 5,
      item_name: "Redmi Note 9 Pro (Glacier White, 64 GB)  (4 GB RAM)",
      item_pic: "https://rukminim1.flixcart.com/image/416/416/k7usyvk0/mobile/k/n/u/mi-redmi-note-9-b0784d7nfq-original-imafqy27p5tuzx77.jpeg?q=70",
      item_price: 15999
    },
    {
      id: 6,
      item_name: "Redmi K20 Pro (Glacier Blue, 128 GB)  (6 GB RAM)",
      item_pic: "https://rukminim1.flixcart.com/image/416/416/jxz0brk0/mobile/w/s/r/redmi-k20-pro-na-original-imafgb4ye45dtzvf.jpeg?q=70",
      item_price: 28999
    },
  ]
  const [cartValue, setCart] = useState(0);

  return (
    <div className="App">
      <AppBar position="fixed" style={{ backgroundColor:"black",height:"5rem" }}>
        <div className="navbar">
          <h1 className="header">Shop With Style </h1>
          <div className="cart_Container">
            <Badge badgeContent={cartValue} color="primary">
              <ShoppingCartIcon className="cart_icon" color="secondary" style={{ fontSize: 50,color:"White" }} />
            </Badge>
          </div>
        </div>

      </AppBar>
      <div className="item_list_container">
        {itemList.map((item, index) =>
          <Item key={index} cartValue={cartValue} setCart={setCart} item_id={item.id} item_name={item.item_name} item_pic={item.item_pic} item_price={item.item_price} />
        )}
      </div>
    </div>
  );
}

export default App;
