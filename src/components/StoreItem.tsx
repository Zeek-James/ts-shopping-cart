import React from "react";
import { useCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();
  const quantity = getItemQuantity(id);
  // getItemQuantity,
  // increaseCartQuantity,
  // decreaseCartQuantity,
  // removeFromCart,
  return (
    <>
      <img src={imgUrl} alt={name} />
      <div className="info">
        <div className="title">
          <span style={{ fontSize: "larger" }}>{name}</span>
          <span
            style={{
              fontSize: "smaller",
              margin: "15px 0",
            }}
          >
            {formatCurrency(price)}
          </span>
        </div>
        <div className="addToCart_Qty__Container">
          {quantity === 0 ? (
            <button
              className="add_to_Cart__Btn"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Cart
            </button>
          ) : (
            <div className="qty__Container">
              <span>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
                <div>
                  <span className="cart_Qty">{quantity} in cart</span>
                </div>
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
              </span>
              <button
                style={{ backgroundColor: "#f00" }}
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
