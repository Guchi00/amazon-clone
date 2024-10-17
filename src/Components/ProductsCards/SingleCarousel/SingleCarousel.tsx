import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./styles.module.css";

export const SingleCarousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Carousel
          autoplay
          arrows
          className={styles.single_carousel}
          prevArrow={
            <ArrowBackIosIcon
              style={{
                fontSize: "70px",
                color: "black",
                height: "100px",
                width: "100px",
              }}
            />
          }
          nextArrow={<ArrowForwardIosIcon />}
          effect="scrollx"
          pauseOnHover={true}
          dots={false}
        >
          <Link to="/games">
            <img
              src="game.jpg"
              alt="essential for gamers"
              className={styles.image}
            />
          </Link>

          <Link to="/homes">
            <img
              src="new-year-deal.jpg"
              alt="new year deals"
              className={styles.image}
            />
          </Link>

          <Link to="/toys">
            <img src="toys.jpg" alt="children toys" className={styles.image} />
          </Link>

          <Link to="/beauty">
            <img
              src="beauty.jpg"
              className={styles.image}
              alt="beauty products"
            />
          </Link>

          <Link to="/kitchen">
            <img
              src="kitchen-favourite.jpg"
              className={styles.image}
              alt="kitchen products"
            />
          </Link>

          <Link to="/beauty">
            <img
              src="val.jpg"
              className={styles.image}
              alt="valentine products"
            />
          </Link>
        </Carousel>
      </div>
    </div>
  );
};
