import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeData from "../../../Data/homes.json";
import { CarouselMultiple } from "../../ProductsReusables/Carousel/CarouselMultiple";
import styles from "./styles.module.css";

export const MultipleCarouselHomes = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className={styles.container}>
      <div className={styles.product_wrapper}>
        <span className={styles.additional_items}>
          Additional items to explore{" "}
          <Link to="/homes" className={styles.carousel_see_more}>
            See more
          </Link>
        </span>
        <Slider {...settings}>
          {homeData.map((product) => (
            <CarouselMultiple
              key={product.id}
              image={<img src={product.imageUrl} alt="carousel_image" />}
              id={product.id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
