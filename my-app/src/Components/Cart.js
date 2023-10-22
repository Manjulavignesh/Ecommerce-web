import React, { useEffect,useState } from "react";
import { Button, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import { CartState } from "../Context/Context";
import { Form, Image } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
const Cart = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [cart]);
  return (
    <>
    <Button type="button"
        style={{marginLeft:475, fontSize: 15 }} >X</Button>
      <div
        style={{
          fontFamily: "cursive",
          fontWeight: 1000,
          fontSize: 30,
          textAlign: "center",
        }}
      >
        CART
      </div>
      
      <div>
        <span
          style={{ fontSize: 28, fontWeight: 750, fontFamily: "monospace" }}
        >
          <u>ITEM</u>
        </span>
        <span
          style={{
            margin: 100,
            fontSize: 28,
            fontWeight: 750,
            fontFamily: "monospace",
          }}
        >
          <u>PRICE</u>
        </span>
        <span
          style={{ fontSize: 28, fontWeight: 750, fontFamily: "monospace" }}
        >
          <u>QUANTITY</u>
        </span>
      </div>
      <ListGroup>
        {cart.map((prod) => (
          <ListGroupItem key={prod.id}>
            <Row>
              <Col md={2}>
                <Image src={prod.imageUrl} style={{ width: 75 }} />
              </Col>
              <Col md={2}>
                <span>{prod.title}</span>
              </Col>
              <Col md={2}>{`$${prod.price}`}</Col>
              <Col md={2}>
                <Form.Control
                  as="select"
                  value={prod.quantity}
                  onChange={(e) =>
                    dispatch({
                      type: "Change Quantity",
                      payload: { id: prod.id, quantity: e.target.value },
                    })
                  }
                >
                  {list.map((item) => (
                    <option>{item}</option>
                  ))}
                </Form.Control>
              </Col>
              <Col md={2}>
                <Button
                  type="button"
                  variant="light"
                  onClick={() =>
                    dispatch({ type: "Remove From Cart", payload: prod })
                  }
                >
                  <AiFillDelete fontSize="20px" />
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      <div
        style={{
          margin: 15,
          fontFamily: "cursive",
          fontWeight: 1000,
          fontSize: 30,
          textAlign: "right",
        }}
      >
        Total: ${total}
      </div>
      <Button
        type="button"
        style={{ margin: 200, marginTop: 50, fontSize: 25 }}
        onClick={() => {
          if (cart.length === 0) {
            alert("You have Nothing in Cart , Add some products to purchase !");
          } else {
            alert("Thanks for the purchase");
            dispatch({ type: "Delete From Cart", payload: cart.prod })
          }
        }}
      >
        Purchase
      </Button>
    </>
  );
};

export default Cart;
