import React from "react";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";


export type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};


const Tile = ({ id, name, price, imgUrl }: StoreItemProps) => {

        const {
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
        } = useShoppingCart();
        const quantity = getItemQuantity(id);
       
  return (
    <div className="grid grid-row-4 items-center m-8 rounded p-8 shadow-lg border-2 radial-bg">
      <div className="grid grid-cols-1 text-center">
        <img
          alt=""
          src={imgUrl}
          //   height="200px"
          className="w-100 px-8"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="grid grid-cols-1 text-center">
        <span> {name}</span>
      </div>
      <div className="grid grid-cols-1 text-center">
        <span> {price}</span>
      </div>
      <div className="grid grid-cols-1 text-center">
    
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              onClick={() => increaseCartQuantity(id)}
              className="px-4 m-1 w-100 rounded w-full bg-goldenTainoi-300 text-gray-300 border text-xl "
            >
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tile;

