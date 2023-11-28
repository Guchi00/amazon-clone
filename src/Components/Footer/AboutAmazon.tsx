import React from "react";
import styles from "./styles.module.css";
import { AboutAmazonItems } from "./AboutAmazonItems";

const data: {
  title: string;
  subTitleOne: string;
  subTitleTwo: string;
  subTitleThree: string;
  subTitleFour: string;
  subTitleFive?: string;
  subTitleSix?: string;
  subTitleSeven?: string;
  subTitleEight?: string;
}[] = [
  {
    title: "Get to Know Us",
    subTitleOne: "Careers",
    subTitleTwo: "Blog",
    subTitleThree: "About Amazon",
    subTitleFour: "Investor Relations",
    subTitleFive: "Amazon Devices",
    subTitleSix: "Amazon Science",
  },
  {
    title: "Make Money with Us",
    subTitleOne: "Sale products on Amazon",
    subTitleTwo: "Sale on Amazon Business",
    subTitleThree: "Sale Apps on Amazon",
    subTitleFour: "Become an affilliate",
    subTitleFive: "Advertise your products",
    subTitleSix: "Self-Publish with Us",
    subTitleSeven: "Host an Amazon Hub",
    subTitleEight: "See More Make Money with Us",
  },
  {
    title: "Amazon Payment Products",
    subTitleOne: "Amazon Business card",
    subTitleTwo: "Shop with Points",
    subTitleThree: "Reload your balance",
    subTitleFour: "Amazon Currency Converter",
  },
  {
    title: "Let Us Help You",
    subTitleOne: "Amazon and COVID-19",
    subTitleTwo: "Your Accout",
    subTitleThree: "Your Orders",
    subTitleFour: "Shipping Rates & Policies",
    subTitleFive: "Returns & Placements",
    subTitleSix: "Manage Your Content & Devices",
    subTitleSeven: "Amazon Assistant",
    subTitleEight: "Help",
  },
];
export function AboutAmazon() {
  return (
    <>
      <div className={styles.parent}>
          {data.map((items) => (
            <AboutAmazonItems 
            key={items.title}
            title={items.title}
            subTitleOne={items.subTitleOne}
            subTitleTwo={items.subTitleTwo}
            subTitleThree={items.subTitleThree}
            subTitleFour={items.subTitleFour}
            subTitleFive={items.subTitleFive}
            subTitleSix={items.subTitleSix}
            subTitleSeven={items.subTitleSeven}
            subTitleEight={items.subTitleEight}
            />
          ))}
      </div>
    </>
  );
}
