import React from "react";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { GiShoppingCart } from "react-icons/gi";


const Header = () => {

    const {  cartQuantity } = useShoppingCart();
  return (
    <div className="grid grid-row-1">
      <div className="grid grid-cols-2 h-32">
        <div className="flex items-center justify-start">
          <svg
            className="w-60"
            id="logoipsum"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 177.778 100"
          >
            Music
            <path
              d="M31.941,62.825h25.65V37.175H31.941ZM52.654,47.532h-5.42v-5.42h5.42Zm-15.777-5.42H42.3V52.468H52.654v5.42H36.877Zm37.417-4.937A12.825,12.825,0,1,0,87.119,50,12.84,12.84,0,0,0,74.294,37.175Zm0,20.713A7.888,7.888,0,1,1,82.182,50,7.9,7.9,0,0,1,74.294,57.888Zm58.719-20.713A12.825,12.825,0,1,0,145.837,50,12.84,12.84,0,0,0,133.013,37.175Zm0,20.713A7.888,7.888,0,1,1,140.9,50,7.9,7.9,0,0,1,133.013,57.888Zm-29.36-20.713A12.825,12.825,0,1,0,116.478,50,12.84,12.84,0,0,0,103.653,37.175Zm0,20.713a7.888,7.888,0,1,1,7.488-10.356h-7.488v4.936h7.488A7.9,7.9,0,0,1,103.653,57.888Z"
              fill="#394149"
            />
          </svg>
        </div>
        <ul className="flex items-center justify-end">
          <li className="px-3.5 font-bold text-xl hover:text-crusta focus-within:text-crusta transition duration-150 ease-in-out">
            <a href="/">Home</a>
          </li>
          <li className="px-3.5 font-bold text-xl hover:text-crusta focus-within:text-crusta transition duration-150 ease-in-out">
            <a href="/contact">Contact</a>
          </li>
          <li className="px-3.5 font-bold text-xl hover:text-crusta focus-within:text-crusta transition duration-150 ease-in-out">
            <a href="/shop">Shop</a>
          </li>
          <li className="px-3.5  text-xl hover:text-crusta focus-within:text-crusta transition duration-150 ease-in-out">

            <Button
              href="/shoppingcart"
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-primary"
              className="rounded-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>

              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
