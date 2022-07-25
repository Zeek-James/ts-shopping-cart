import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { CartProvider } from "./context/ShoppingCartContext";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <div className={"app__Container"}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/store" element={<Store />}></Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
