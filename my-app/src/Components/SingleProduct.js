import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../Context/Context";

const SingleProduct = (prod) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.imageUrl} alt={prod.title} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle>{`$ ${prod.price}`}</Card.Subtitle>
          <Card.Subtitle className="m-1">
            {cart.some(p => p.id == prod.id) ? (
              <Button
                onClick={() => {
                    
                  dispatch({ type: "Remove From Cart", payload:prod });
                }}
                variant="danger"
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch({ type: "Add to Cart", payload: prod });
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
