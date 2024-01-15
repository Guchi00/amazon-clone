import { FormateCurrency } from "../../Utilities/FormateCurrency";

export interface INewTotalPriceProps {
  amount: number;
  productsCount?: number;
}

export const TotalPrice = (props: INewTotalPriceProps) => {
  const { amount, productsCount } = props;
  return (
    <>
      <div>
        Subtotal ({productsCount} items):
        <span style={{ fontWeight: "700" }}>{FormateCurrency(amount)}</span>
      </div>
    </>
  );
};
