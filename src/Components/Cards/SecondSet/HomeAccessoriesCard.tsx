import React from "react";
import { Link } from "react-router-dom";
import { HomeAccessories } from "../../HomeAccessories/HomeAccessories";
import styles from "./styles.module.css";

const data = [
  {
    imageUrl: "",
    title: "Dining",
  },
  {
    imageUrl: "",
    title: "Home",
  },
  {
    imageUrl: "",
    title: "Kitchen",
  },
  {
    imageUrl: "",
    title: "Health and Beauty",
  },
];

export function HomeAccessoriesCard() {
  return (
    <>
      <div className={styles.parent_con}>
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
          {data.map((items) => (
            <HomeAccessories
              key={items.title}
              image={items.imageUrl}
              title={items.title}
            />
          ))}
        </div>
        <Link to="" className={styles.see_more}>
          See more
        </Link>
      </div>
    </>
  );
}
