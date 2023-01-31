import React from "react";
import Navbar from "./components/header";
import Shop from "./pages/shop";
import "./App.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./components/ShoppingCart";
import { Container } from "react-bootstrap";


const App = () => {
  return (
    <ShoppingCartProvider>
      <div className="font-sans bg-eggWhite box-border">
        <div className="container mx-auto">
          <Navbar />
          <Container className="mb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
          </Container>
        </div>
      </div>
    </ShoppingCartProvider>
  );
};

export default App;
