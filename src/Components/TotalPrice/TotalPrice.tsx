import { FormateCurrency } from "../../Utilities/FormateCurrency";
import { INewProductsCountProps, CartWidget } from "../CartWidget/CartWidget";

export interface INewTotalPriceProps {
  amount: number;
  productsCount?: number;
}

export const TotalPrice = (props: INewTotalPriceProps) => {
  const { amount, productsCount } = props;
  return <div>Subtotal:{FormateCurrency(amount)}</div>;
};
