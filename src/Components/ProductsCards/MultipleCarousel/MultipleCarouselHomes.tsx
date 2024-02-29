import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeData from "../../../Data/homes.json";
import { CarouselMultiple } from "../../ProductsReusables/Carousel/CarouselMultiple";
import styles from "./styles.module.css";
import { Grid } from "antd";

const { useBreakpoint } = Grid;
export const MultipleCarouselHomes = () => {
  const breakpoints = useBreakpoint();

  console.log(breakpoints, "break pints");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    // swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          swipeToSlide: true,
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
          swipeToSlide: true,
        },
      },
      // {
      //   breakpoint: 360,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  return (
    <div className={styles.container_home}>
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
              image={
                <img
                  src={product.imageUrl}
                  alt="carousel_image"
                  className={styles.carousel_image}
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
