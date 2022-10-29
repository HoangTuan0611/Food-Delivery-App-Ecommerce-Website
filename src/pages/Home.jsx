import React from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, saepe?",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, saepe?",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, saepe?",
  },
];

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HURRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum consequuntur eligendi iure eaque!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
              </div>
              <div className="hero__service d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i class="ri-car-line"></i>
                  </span>
                  No shipping charge
                </p>
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i class="ri-shield-check-line"></i>
                  </span>
                  100% secure checkout
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                We will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores, quod!
              </p>
              <p className="feature-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, quia.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index}>
                <div className="feature__item">
                  
                </div>
              </Col>
            ))}

            <Col lg="4" md="4"></Col>
            <Col lg="4" md="4"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
