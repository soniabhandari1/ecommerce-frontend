import React from "react";
import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
function CartPage() {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const userCartObj = user.cart;
  let cart = products.filter((product) => userCartObj[product._id] != null);
  return (
    <Container style={{ minHeight: "95vh" }} className="cart-container">
      <Row>
        <h1 className="pt-2 h3">Shopping cart</h1>
        {cart.length == 0}{" "}
        {
          <Alert variant="info">
            Shopping cart is empty. Add products to your cart
          </Alert>
        }
      </Row>
    </Container>
  );
}

export default CartPage;
