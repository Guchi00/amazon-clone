import { NavBar } from '../Components/Navigation/NavBar';
import { FirstItems } from '../Components/Products/FirstSection/FirstItems';
import { SecondItems } from '../Components/Products/SecondSection/SecondItems';
import { ThirdItems } from '../Components/Products/ThirdSection/ThirdItems';

export const Home = () => {
  return (
    <>
    <NavBar />
    <FirstItems />
    <SecondItems />
    <ThirdItems />
    </>
  )
};
