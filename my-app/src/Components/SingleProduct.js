import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../Context/Context";
import axios from "axios";
import "./SingleProduct.css";
import { useEffect } from "react";

const SingleProduct = (prod) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  useEffect(() => {
    localStorage.setItem("cart",JSON.stringify(cart))
  }, [cart]);
  return (
    <div className="products">
      <Card>
        <a href={`http://localhost:3000/store/${prod.title}`}>
          <Card.Img
            variant="top"
            src={prod.imageUrl}
            alt={prod.title}
            className="zoom"
          />
        </a>
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle>{`$ ${prod.price}`}</Card.Subtitle>
          <Card.Subtitle className="m-1">
            {cart.some((p) => p.id == prod.id) ? (
              <Button
                onClick={() => {
                  dispatch({ type: "Remove From Cart", payload: prod });
                  axios
                    .get(
                      "https://crudcrud.com/api/9451b42f4cff416da248af78a1dc572c/Product"
                    )
                    .then((res) => {
                      let id;
                      for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].title == prod.title) {
                          id = res.data[i]._id;
                          break;
                        }
                      }
                      axios.delete(
                        `https://crudcrud.com/api/9451b42f4cff416da248af78a1dc572c/Product/${id}`
                      );
                    });
                }}
                variant="danger"
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch({ type: "Add to Cart", payload: prod });
                  axios.post(
                    "https://crudcrud.com/api/9451b42f4cff416da248af78a1dc572c/Product",
                    prod
                  );
                }}
              >
                Add to Cart
              </Button>
            )}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
