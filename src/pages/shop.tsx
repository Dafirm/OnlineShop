


import React, { Fragment } from "react";
import storeItems from "../data/items.json";
import ProductTile from "../components/tiles";

const Shop = () => {
  return (
    <div className="grid grid-row-auto">
      <div className="grid grid-cols-1">
        <div
          className="bg-gradient-to-r from-lightningYellow via-treePoppy
       to-goldenTainoi h-96 shadow-lg my-8 rounded-lg pt-12 p-12"
        >
          <div className="grid grid-cols-3 items-center">
            <div className="font-bold">
              <a href="/">Home</a>
              <a href="/shopping">/Shopping</a>
              <a href="/product">/Products</a>
            </div>

            <div className="text-center text-4xl font-bold">Shopping Cart</div>

            <div className="flex justify-end items-center">
              <span className="font-bold px-7">Showing 1 of 40</span>
              <span>
                <select>
                  <option value="1">Fashion</option>
                  <option value="2">Women</option>
                  <option value="3">Men</option>
                  <option value="4">Kids</option>
                </select>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 -mt-80">
          {storeItems.map((product) => {
            return (
              <Fragment key={product.id}>
                <ProductTile  {...product} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;


