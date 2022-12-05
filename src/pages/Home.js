import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
  return (
    <div>
      <img src="https://graphicsfamily.com/wp-content/uploads/2020/07/Real-estate-web-banner-design.jpg"></img> {/*firstbanner*/}
      <div className="featured-product-container container mt-4">
        <h3>Last Products</h3>
        {/* will come from backend*/}
        <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more{">>"}
          </Link>
        </div>
      </div>
      {/*sale banner*/}
      <div className="sale_banner-container mt-4">
        <img src="https://img.freepik.com/free-psd/super-sale-banner_1393-365.jpg?1&w=740&t=st=1667480973~exp=1667481573~hmac=ace8abf09b083130737b8c25db7936f9caa43e6c6ddbdb3c36d14cb5a2ef8392"></img>
      </div>
      <div className="recent-products-container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category)=>
          <LinkContainer to={`/category/${category.name.toLowerCase()}`}>
          <Col md={4}>
            <div style={{backgroundImage:`Linear-Gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${category.img})`,gap:"10px"}}  className="category-tile">{category.name}</div>
          </Col>
          </LinkContainer>
          )}
        </Row>
      </div>
    </div>
  );
}

export default Home;
