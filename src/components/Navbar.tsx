import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../context/ShoppingCartContext";

export const Navbar = () => {
  const { openCart, cartQty } = useCart();

  return (
    <div className={"navbar__Container"}>
      <div className={"nav__Container"}>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/store"> Store</Link>
      </div>
      {cartQty > 0 && (
        <button className="nav__cart__Btn">
          <AiOutlineShoppingCart style={{ fontSize: "2rem" }} />
          <div>{cartQty}</div>
        </button>
      )}
    </div>
  );
};
