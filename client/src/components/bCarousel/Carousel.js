import React from "react";
import Carousel from "react-bootstrap/Carousel";
import classes from "./Carousel.module.css";

const carousel = () => {
  return (
    <Carousel className={classes.carousel}>
      <Carousel.Item>
        <img
          className={classes.carouselImage}
          src="https://cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498_960_720.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>"Your School"</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={classes.carouselImage}
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>"Your Books"</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={classes.carouselImage}
          src="https://cdn.pixabay.com/photo/2015/05/15/14/48/house-768707_960_720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>"At Your Door step"</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;
