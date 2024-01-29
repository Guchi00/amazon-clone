import { NavBar } from "../Components/Navigation/NavBar";
import { FirstItems } from "../Components/ProductsCards/FirstSection/FirstItems";
import { FouthItems } from "../Components/ProductsCards/FourthSection/FourthItems";
import { SecondItems } from "../Components/ProductsCards/SecondSection/SecondItems";
import { ThirdItems } from "../Components/ProductsCards/ThirdSection/ThirdItems";

import styles from "./styles.module.css";
import {
  Account,
  BackToTheTopPage,
  AmazonInfo,
  LanguageButtons,
} from "../Components/Footer";

export const Home = () => {
  return (
    <div className={styles.home_page}>
      <NavBar />
      <FirstItems />
      <SecondItems />
      <ThirdItems />
      <FouthItems />
      <Account />
      <BackToTheTopPage />
      <AmazonInfo />
      <LanguageButtons />
    </div>
  );
};
