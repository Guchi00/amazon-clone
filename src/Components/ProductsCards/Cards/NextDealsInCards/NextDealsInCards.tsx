import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { HomeAccessoriesCard } from "./HomeAccessoriesCard";
import { NextDealsInCardsItems } from "../../../ProductsReusables/Cards/NextDealsInCardsItems";

const data: { title: string; imageUrl: string; actionUrl: string }[] = [
  {
    title: "Holiday Deals in fashion",
    imageUrl: "fashion-frontp.webp",
    actionUrl: "/fashion",
  },
  {
    title: "A whole new way to work",
    imageUrl: "new_waytowork.jpg",
    actionUrl: "/laptops",
  },
  {
    title: "Activity tracker and smart watches",
    imageUrl: "smartwatch.jpg",
    actionUrl: "/watches",
  },
];

export const NextDealsInCards = () => {
  return (
    <div className={styles.parent}>
      <HomeAccessoriesCard />
      {data.map((items) => (
        <NextDealsInCardsItems
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
  );
};
