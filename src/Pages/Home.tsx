import { Actions } from "../Components/Footer/Actions";
import { AboutAmazon } from "../Components/Footer/AboutAmazon";
import { NavBar } from "../Components/Navigation/NavBar";
import { FirstItems } from "../Components/ProductsCards/FirstSection/FirstItems";
import { FouthItems } from "../Components/ProductsCards/FourthSection/FourthItems";
import { SecondItems } from "../Components/ProductsCards/SecondSection/SecondItems";
import { ThirdItems } from "../Components/ProductsCards/ThirdSection/ThirdItems";
import { ActionButtons } from "../Components/Footer/ActionButtons";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <div className={styles.home_page}>
      <NavBar />
      <FirstItems />
      <SecondItems />
      <ThirdItems />
      <FouthItems />
      <Actions />
      <AboutAmazon />
      <ActionButtons />
    </div>
  );
};
