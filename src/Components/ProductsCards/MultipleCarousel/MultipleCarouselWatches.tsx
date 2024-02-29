import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselWatchData from "../../../Data/carouselwatches.json";
import { CarouselMultiple } from "../../ProductsReusables/Carousel/CarouselMultiple";
import styles from "./styles.module.css";

export const MultipleCarouselWatches = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          // dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={styles.container_watches}>
      <div className={styles.product_wrapper}>
        <span className={styles.additional_items}>
          Additional items to explore{" "}
          <Link to="/watches" className={styles.carousel_see_more}>
            See more
          </Link>
        </span>
        <Slider {...settings}>
          {carouselWatchData.map((product) => (
            <CarouselMultiple
              key={product.id}
              image={
                <img
                  src={product.imageUrl}
                  alt="carousel_image"
                  className={styles.carousel_image_watches}
                />
              }
              id={product.id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
