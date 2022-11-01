import React from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import productImg from "../assets/images/product_01.1.jpg";
import "../styles/product-details.css";

const FoodDetail = () => {
  return (
    <Helmet title="Product-details">
      <CommonSection title="product 01" />

      <section>
        <Container>
          <Row>
            <Col md="2">
              <div className="product__images">
                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>
                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>
                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="product__main-img">
                <img src={productImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">Pizza with mushroom</h2>
                <span className="product__price">
                  Price: <span>$34</span>
                </span>
                <p className="category mb-5">
                  Category: <span>Burger</span>
                </p>

                <button className="addToCart__btn">Add to Cart</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6 className="tab__active">Desription</h6>
                <h6>Review</h6>
              </div>

              <div className="tab__content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat, ipsam. Alias voluptate minima quaerat tempora ut
                  laudantium amet suscipit natus possimus deserunt iste,
                  praesentium, reprehenderit pariatur. Esse, est dolorem tempora
                  illo voluptate sed reprehenderit aut sit sunt, ipsum quia
                  atque?
                </p>
              </div>

              <div className="tab__form">
                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">john1@gmail.com</p>
                  <p className="feedback__text">great product</p>
                </div>

                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">john1@gmail.com</p>
                  <p className="feedback__text">great product</p>
                </div>

                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">john1@gmail.com</p>
                  <p className="feedback__text">great product</p>
                </div>
                
                <form className="form">
                  <div className="form__group">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="form__group">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="form__group">
                    <textarea
                      rows={5}
                      type="text"
                      placeholder="Enter your name"
                    ></textarea>
                  </div>
                  <button type="submit" className="addtoCart__btn">
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetail;
