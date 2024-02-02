import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface INewCarouselMultipleProps {
  id: number;
  image: React.ReactNode;
}

export const CarouselMultiple = (props: INewCarouselMultipleProps) => {
  // const {image, id} = props;
  return (
    <div>
      <Link to={`/product/${props.id}`} className={styles.image_container}>
        {props.image}
      </Link>
    </div>
  );
};
