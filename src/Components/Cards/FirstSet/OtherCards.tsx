import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { GameAccessoriesCard } from "./GameAccessoriesCard";
import { OtherCardsItems } from "./OtherCardsItems";

const data: { title: string; imageUrl: string; actionUrl: string }[] = [
  {
    title: "Deals in PCs",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMv5C-7hpe26EhCAQP3Qh68ea2bVABalrSqw&usqp=CAU",
    actionUrl: "/pcs",
  },
  {
    title: "Small gifts under $20",
    imageUrl:
      "https://assets.aboutamazon.com/dims4/default/ef95a9b/2147483647/strip/true/crop/3335x3335+0+0/resize/743x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fb7%2F09%2F38dd756b45cf9e50ecc362aace87%2Fus2023db107-holiday-bfcm-box-tape-glitter-still-1-1-so1.jpg",
    actionUrl: "/gifts?maxPrice=20",
  },
  {
    title: "Toys under $25",
    imageUrl:
      "https://m.media-amazon.com/images/I/71Sy8waNfaL._AC_UF894,1000_QL80_.jpg",
    actionUrl: "/toys?maxPrice=25",
  },
];

export function OtherCards() {
  return (
    <>
      <div className={styles.parent}>
        <GameAccessoriesCard />
        {data.map((items) => (
          <OtherCardsItems
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
