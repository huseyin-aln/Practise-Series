import React, {useState, useEffect} from "react";
import "./ShoppingCart.css"


const ShoppingCart = ({cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice()
  }

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price))
    setPrice(ans);
  }
  
  useEffect(() => {
    handlePrice()
  });
  

  return (
    <article>
      {
        cart.map((item) => (
          <div className="cart-box" key={item.id}>
            <div className="cart-img">
              <img src={item.img} alt="itemimg" />
              <p>{item.title}</p>
            </div>
            <div className="btn">
              <button onClick={() => handleChange(item, -1)}>-</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, 1)}>+</button>
            </div>
            <div className="price">
              <span>$ {item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      }
      <div className="total">
        <span>Total Price of Your Cart</span>
        <span>$ {price.toFixed(2)}</span>
      </div>

    </article>
  )
};

export default ShoppingCart;
