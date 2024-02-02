import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { GameAccessoriesCard } from "./GameAccessoriesCard";
import { DealsInCardsItems } from "../../../ProductsReusables/Cards/DealsInCardsItems";

const data: { title: string; imageUrl: string; actionUrl: string }[] = [
  {
    title: "Deals in PCs",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMv5C-7hpe26EhCAQP3Qh68ea2bVABalrSqw&usqp=CAU",
    actionUrl: "/pcs",
  },
  {
    title: "Deals on shoes under $70",
    imageUrl:
      "https://m.media-amazon.com/images/I/61FJBzfAI5L._AC_UF894,1000_QL80_.jpg",
    actionUrl: "/shoes?maxPrice=70",
  },
  {
    title: "Toys under $25",
    imageUrl:
      "https://m.media-amazon.com/images/I/71Sy8waNfaL._AC_UF894,1000_QL80_.jpg",
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
