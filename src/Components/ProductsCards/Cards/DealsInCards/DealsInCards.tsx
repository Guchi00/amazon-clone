import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { GameAccessoriesCard } from "./GameAccessoriesCard";
import { DealsInCardsItems } from "../../../ProductsReusables/Cards/DealsInCardsItems";

const data: { title: string; imageUrl: string; actionUrl: string }[] = [
  {
    title: "Deals in PCs",
    imageUrl: "pc-frontp.jpeg",
    actionUrl: "/pcs",
  },
  {
    title: "Deals on shoes under $70",
    imageUrl: "shoe-frontp.jpg",
    actionUrl: "/shoes?maxPrice=70",
  },
  {
    title: "Toys under $25",
    imageUrl: "toys-frontp.jpg",
    actionUrl: "/toys?maxPrice=25",
  },
];

export function DealsInCards() {
  return (
    <>
      <div className={styles.parent}>
        <GameAccessoriesCard />
        {data.map((items) => (
          <DealsInCardsItems
            key={items.title}
            title={items.title}
            image={<img src={items.imageUrl} alt={"images"} />}
            action={
              <Link to={items.actionUrl} className={styles.action_link}>
                Shop now
              </Link>
            }
          />
        ))}
      </div>
    </>
  );
}
