import React from "react";
import { Link } from "react-router-dom";
import { HomeAccessoriesCardItems } from "../../../ProductsReusables/HomeAccessoriesCardItems/HomeAccessoriesCardItems";
import styles from "./styles.module.css";

export const data: {
  imageUrl: string;
  subTitleUrl: string;
  subTitle: string;
}[] = [
  {
    imageUrl: "dining-frontp.jpg",
    subTitleUrl: "/dining",
    subTitle: "Dining",
  },
  {
    imageUrl: "home-frontp.jpg",
    subTitleUrl: "/homes",
    subTitle: "Home",
  },
  {
    imageUrl: "kitchen-frontp.webp",
    subTitleUrl: "/kitchen",
    subTitle: "Kitchen",
  },
  {
    imageUrl: "beauty-frontp.jpg",
    subTitleUrl: "/beauty",
    subTitle: "Health and Beauty",
  },
];

export function HomeAccessoriesCard() {
  return (
    <>
      <div className={styles.allcards_first_diff_one}>
        <span className={styles.title}>Refresh your Space</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginLeft: "30px",
          }}
        >
          {data.map((item) => (
            <HomeAccessoriesCardItems
              key={item.subTitle}
              image={<img src={item.imageUrl} alt={"images"} />}
              subTitle={
                <Link to={item.subTitleUrl} className={styles.subTitle_link}>
                  {item.subTitle}
                </Link>
              }
            />
          ))}
        </div>
        <Link to="/products" className={styles.see_more}>
          See more
        </Link>
      </div>
    </>
  );
}
