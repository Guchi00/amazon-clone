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
    imageUrl:
      "https://m.media-amazon.com/images/I/811lVA4b7nL._AC_UF894,1000_QL80_.jpg",
    subTitleUrl: "/dining",
    subTitle: "Dining",
  },
  {
    imageUrl:
      "https://media.theeverygirl.com/wp-content/uploads/2021/08/best-home-decor-on-amazon-the-everygirl-28.jpg",
    subTitleUrl: "/homes",
    subTitle: "Home",
  },
  {
    imageUrl:
      "https://media1.popsugar-assets.com/files/thumbor/6qlyj3oCmd3x4DxNlpkBVUgrX34/20x10:1467x1457/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/28/983/n/1922794/cacf60445cedb7c0bcce23.15600413_/i/Kitchen-Products-Small-Spaces-From-Amazon.jpg",
    subTitleUrl: "/kitchen",
    subTitle: "Kitchen",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/41cdd3tNtBL._SY500__AC_UF420%2C420_FMjpg_.jpg",
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
