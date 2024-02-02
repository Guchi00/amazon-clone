import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./styles.module.css";

export const SingleCarousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box_content}>
        <Carousel
          autoplay
          arrows
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
              src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61CiqVTRBEL._SX3000_.jpg"
              alt="essential_for_gamers_image"
              className={styles.image_contents}
            />
          </Link>

          <Link to="/homes">
            <img
              src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71NqG9bBp7L._SX3000_.jpg"
              alt="lunar_for_new_year_image"
              className={styles.image_contents}
            />
          </Link>

          <Link to="/toys">
            <img
              src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81KkrQWEHIL._SX3000_.jpg"
              alt="children_toys_image"
              className={styles.image_contents}
            />
          </Link>

          <Link to="/beauty">
            <img
              src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61zAjw4bqPL._SX3000_.jpg"
              className={styles.image_contents}
              alt="beauty_image_product"
            />
          </Link>

          <Link to="/kitchen">
            <img
              src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61lwJy4B8PL._SX3000_.jpg"
              className={styles.image_contents}
              alt="kitchen_image_product"
            />
          </Link>

          <Link to="/">
            <img
              src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71nwqPZaNRL._SX3000_.jpg"
              className={styles.image_contents}
              alt="valentine_image_product"
            />
          </Link>

          <Link to="/">
            <img
              src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71Ie3JXGfVL._SX3000_.jpg"
              className={styles.image_contents}
              alt="books_image_product"
            />
          </Link>
        </Carousel>
      </div>
    </div>
  );
};
