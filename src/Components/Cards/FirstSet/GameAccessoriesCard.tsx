import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Gaming } from "../../GamingAccessories/Gaming";

export const data: {
  imageUrl: string;
  subTitleUrl: string;
  subTitle: string;
  imageTo: string;
}[] = [
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UF894,1000_QL80_.jpg",

    subTitleUrl: "/headsets",
    subTitle: "Headset",
    imageTo: "/headsets",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71eWnvYKN3L._AC_UF894,1000_QL80_.jpg",
    subTitleUrl: "/keyboards",
    subTitle: "Keyboard",
    imageTo: "/keyboards",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71wc9isMnlL._AC_UF894,1000_QL80_.jpg",
    subTitleUrl: "/mices",
    subTitle: "Computer Mice",
    imageTo: "/mices",
  },
  {
    imageUrl:
      "https://ii2.pepperfry.com/media/catalog/product/t/y/800x880/tycoon-high-back-office-chair-in-black-colour-by-nilkamal-tycoon-high-back-office-chair-in-black-col-qyv0vp.jpg",
    subTitleUrl: "/chairs",
    subTitle: "Chairs",
    imageTo: "/chairs",
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
            <Gaming
              key={item.subTitle}
              image={
                // <Link to={item.imageTo} className={styles.image}>
                //   {" "}
                <img src={item.imageUrl} alt={"images"} />
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
