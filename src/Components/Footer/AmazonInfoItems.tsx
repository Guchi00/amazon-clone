import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface INewInformationItems {
  title: string;
  subTitleOne: React.ReactNode;
  subTitleTwo: React.ReactNode;
  subTitleThree: React.ReactNode;
  subTitleFour: React.ReactNode;
  subTitleFive?: React.ReactNode;
  subTitleSix?: React.ReactNode;
  subTitleSeven?: React.ReactNode;
  subTitleEight?: React.ReactNode;
}

export const AmazonInfoItems = (props: INewInformationItems) => {
  const {
    title,
    subTitleOne,
    subTitleTwo,
    subTitleThree,
    subTitleFour,
    subTitleFive,
    subTitleSix,
    subTitleSeven,
    subTitleEight,
  } = props;

  return (
    <>
      <div className={styles.data_box}>
        <span className={styles.title}>{title}</span>
        <Link to="" className={styles.subtitle}>
          {subTitleOne}
        </Link>
        <Link to="" className={styles.subtitle}>
          {subTitleTwo}
        </Link>
        <Link to="" className={styles.subtitle}>
          {subTitleThree}
        </Link>
        <Link to="" className={styles.subtitle}>
          {subTitleFour}
        </Link>
        <Link to="" className={styles.subtitle}>
          {subTitleFive}
        </Link>
        <Link to="" className={styles.subtitle}>
          {subTitleSix}
        </Link>
        <Link to="" className={styles.subtitle}>
          {subTitleSeven}
        </Link>
        <Link to="" className={styles.subtitle}>
          {subTitleEight}
        </Link>
      </div>
    </>
  );
};
