import useLocalStorageState from "use-local-storage-state";
import { Link, useParams } from "react-router-dom";
import { message } from "antd";
import { FormateCurrency } from "../../../Utilities/FormateCurrency";
import styles from "./styles.module.css";

export type ProductProps = {
  id: number;
  image: string;
  title: string;
  cost: number;
  quantity?: number;
};

export interface INewCartsProps {
  [ProductId: string]: ProductProps;
}

export function Product(props: ProductProps) {
  const { image, title, cost } = props;

  //The cart has the entire product props which is an object of product type
  const [cart, setCart] = useLocalStorageState<INewCartsProps>("cart", {});

  const addToCart = (product: ProductProps): void => {
    if (cart?.hasOwnProperty(product.id)) {
      const existingProduct = cart[product.id];
      const updatedExistingProduct = {
        ...existingProduct,
        quantity: (existingProduct.quantity as number) + 1,
      };
      setCart((prevCart) => ({
        ...prevCart,
        [product.id]: updatedExistingProduct,
      }));
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        [product.id]: { ...product, quantity: 1 },
      }));
    }
    message.success("item added to cart");
  };

  return (
    <>
      <div className={styles.holder}>
        <Link to={`/product/${props.id}`} className={styles.image_container}>
          <img src={image} alt={"product_image"} />
        </Link>
        <div className={styles.other_items_holder}>
          <Link to={`/product/${props.id}`} className={styles.item_title}>
            {title}
          </Link>
          <span className={styles.cost}>{FormateCurrency(cost)}</span>
          <button onClick={() => addToCart(props)} className={styles.action}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
