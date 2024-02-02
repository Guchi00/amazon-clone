import { NavBar } from "../Components/Navigation/NavBar";
import { SingleCarousel } from "../Components/ProductsCards/SingleCarousel/SingleCarousel";
import { MultipleCarouselHomes } from "../Components/ProductsCards/MultipleCarousel/MultipleCarouselHomes";
import { DealsInCards } from "../Components/ProductsCards/Cards/DealsInCards/DealsInCards";
import { NextDealsInCards } from "../Components/ProductsCards/Cards/NextDealsInCards/NextDealsInCards";

import styles from "./styles.module.css";
import {
  Account,
  BackToTheTopPage,
  AmazonInfo,
  Buttons,
  Divider,
} from "../Components/Footer";
import { MultipleCarouselWatches } from "../Components/ProductsCards/MultipleCarousel/MultipleCarouselWatches";
export const Home = () => {
  return (
    <div className={styles.home_page}>
      <NavBar />
      <SingleCarousel />
      <DealsInCards />
      <NextDealsInCards />
      <MultipleCarouselHomes />
      <MultipleCarouselWatches />
      <Divider />
      <Account />
      <BackToTheTopPage />
      <AmazonInfo />
      <Buttons />
    </div>
  );
};
