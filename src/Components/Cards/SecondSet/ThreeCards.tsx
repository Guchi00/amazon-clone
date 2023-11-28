import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import { HomeAccessoriesCard } from './HomeAccessoriesCard';
import { ThreeCardsItems } from './ThreeCardsItems';

const data: {title: string, imageUrl: string, actionUrl: string}[] = [
  {
    title: "Holiday Deals in fashion",
    imageUrl: "https://publish.purewow.net/wp-content/uploads/sites/2/2023/10/Amazon-Prime-Big-Deal-Days-Fashion-Deals-CAT.jpg?resize=720%2C780",
    actionUrl: "/fashion"
  },
  {
    title: "A whole new way to work",
    imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/jiobook_launch-sixteen_nine.jpg?VersionId=oBAnCjj5rMUPQEXIxumCTixoL8UOcJaj&size=690:388",
    actionUrl: "/laptops"
  },
  {
    title: "Activity tracker and smart watches",
    imageUrl: "https://m.media-amazon.com/images/I/71l6cnvwnXL._AC_UF1000,1000_QL80_.jpg",
    actionUrl: "/activitytracker&smartwatches"
  }
]

export function ThreeCards() {

 return (
    <>
      <div className={styles.parent}>
        <HomeAccessoriesCard />
        {data.map((items) =>
        <ThreeCardsItems 
        key={items.title} 
        title={items.title} 
        image={<img src={items.imageUrl} alt={"images"}/>} 
        action={<Link to={items.actionUrl} className={styles.action_link_props}>Shop now</Link>} />
        )}
      </div>
    </>
  )
}
