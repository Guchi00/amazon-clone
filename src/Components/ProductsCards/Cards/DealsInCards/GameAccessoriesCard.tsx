import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { GamesAccessoriesCardItems } from "../../../ProductsReusables/GamesAccessoriesCardItems/GamesAccessoriesCardItems";

export const data: {
  imageUrl: string;
  subTitleUrl: string;
  subTitle: string;
  imageTo: string;
}[] = [
  {
    imageUrl: "headset-frontp.jpg",

    subTitleUrl: "/headsets",
    subTitle: "Headset",
    imageTo: "/headsets",
  },
  {
    imageUrl: "chair-frontp.jpg",
    subTitleUrl: "/chairs",
    subTitle: "Chairs",
    imageTo: "/chairs",
  },

  {
    imageUrl: "mouse-frontp.jpg",
    subTitleUrl: "/mices",
    subTitle: "Computer Mice",
    imageTo: "/mices",
  },
  {
    imageUrl: "keyboard-frontp.jpg",
    subTitleUrl: "/keyboards",
    subTitle: "Keyboard",
    imageTo: "/keyboards",
  },
];

export function GameAccessoriesCard() {
  return (
    <>
      <div className={styles.allcards_first_diff_one}>
        <span className={styles.title}>Gaming accessories</span>
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
            <GamesAccessoriesCardItems
              key={item.subTitle}
              image={
                // <Link to={item.imageTo} className={styles.image}>
                //   {" "}
                <img src={item.imageUrl} alt={"game accessories"} />
                // </Link>
              }
              subTitle={
                <Link className={styles.sub_title} to={item.subTitleUrl}>
                  {item.subTitle}
                </Link>
              }
            />
          ))}
        </div>
        <Link to="/games" className={styles.see_more}>
          See more
        </Link>
      </div>
    </>
  );
}
