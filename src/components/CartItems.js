import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import {useSelector} from "react-redux";
const CartItems = () => {
    const cartItemsList = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
          {cartItemsList.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    total={item.total}
                />
            ))}

      </ul>
    </div>
  );
};

export default CartItems;
