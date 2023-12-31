import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Gaming } from "../../GamingAccessories/Gaming";

export const data: {
  imageUrl: string;
  subTitleUrl: string;
  subTitle: string;
}[] = [
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UF894,1000_QL80_.jpg",
    subTitleUrl: "/headsets",
    subTitle: "Headset",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71eWnvYKN3L._AC_UF894,1000_QL80_.jpg",
    subTitleUrl: "/keyboards",
    subTitle: "Keyboard",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71wc9isMnlL._AC_UF894,1000_QL80_.jpg",
    subTitleUrl: "/mices",
    subTitle: "Computer Mice",
  },
  {
    imageUrl:
      "https://ii2.pepperfry.com/media/catalog/product/t/y/800x880/tycoon-high-back-office-chair-in-black-colour-by-nilkamal-tycoon-high-back-office-chair-in-black-col-qyv0vp.jpg",
    subTitleUrl: "/chairs",
    subTitle: "Chairs",
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
          {data.map((items) => (
            <Gaming
              key={items.subTitle}
              image={<img src={items.imageUrl} alt={"images"} />}
              subTitle={
                <Link
                  className={styles.gaming_subTitle_props}
                  to={items.subTitleUrl}
                >
                  {items.subTitle}
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
