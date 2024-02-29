import { ReactNode } from "react";
import styles from "./styles.module.css";

export const Mobile = ({ children }: { children: ReactNode }) => {
  return <div className={styles.mobile}>{children}</div>;
};

export const Desktop = ({ children }: { children: ReactNode }) => {
  return <div className={styles.desktop}>{children}</div>;
};

export const ResponsiveWrapper = {
  Mobile,
  Desktop,
};
