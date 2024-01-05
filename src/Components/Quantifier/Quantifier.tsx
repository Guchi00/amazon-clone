import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import {
  INewCartsProps,
  ProductProps,
} from "../ProductsReusables/Products/Product";
import styles from "./styles.module.css";

export type Operation = "decrease" | "increase";

export interface INewQuantifierProps {
  removeProductCallback: (productId: number) => void;
  handleUpdateQuantity: (productId: number, operation: Operation) => void;
  productId: number;
}

export const Quantifier = (props: INewQuantifierProps) => {
  const { removeProductCallback, handleUpdateQuantity, productId } = props;

  const [cart, setCart] = useLocalStorageState<INewCartsProps>("cart", {});
  const getQuantity = cart?.[productId].quantity ?? 1;
  const [value, setValue] = useState<number>(getQuantity);

  const increase = () => {
    const existing = cart?.[productId];
    if (existing?.quantity) {
      setValue((prevState) => prevState + 1);
      existing.quantity = existing.quantity + 1;

      setCart((prevCart) => ({
        ...prevCart,
        [productId]: {
          ...existing,
        },
      }));
    }
  };

  const reduce = () => {
    const existing = cart?.[productId];
    if (existing?.quantity) {
      if (existing.quantity > 1) {
        setValue((prevState) => prevState - 1);
        existing.quantity = existing.quantity - 1;

        setCart((prevCart) => ({
          ...prevCart,
          [productId]: {
            ...existing,
          },
        }));
      } else {
        delete cart?.[productId];
        setCart({
          ...cart,
        });
      }
    }
  };

  return (
    <>
      <div className={styles.quantifier}>
        <input
          type="button"
          value="-"
          className={styles.buttonMinus}
          onClick={reduce}
        />
        <input
          type="number"
          step="1"
          max=""
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className={styles.quantityField}
        />
        <input
          type="button"
          value="+"
          className={styles.buttonPlus}
          onClick={increase}
        />
      </div>
    </>
  );
};
