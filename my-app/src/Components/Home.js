import React from "react";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import "./Styles.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) => {
          return (
            <SingleProduct
              title={prod.title}
              price={prod.price}
              imageUrl={prod.imageUrl}
              quantity={prod.quantity}
              id={prod.id}
              key={prod.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
