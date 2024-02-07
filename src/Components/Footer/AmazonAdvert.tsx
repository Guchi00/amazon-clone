import React from "react";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { AmazonAdvertItems } from "./AmazonAdvertItems";
import data from "../../Data/amazonAdverts.json";
import styles from "./styles.module.css";

export const AmazonAdvert = () => {
  return (
    <>
      <div className={styles.parent_div}>
        <div className={styles.wrapper}>
          {data.map((items) => (
            <AmazonAdvertItems
              key={items.id}
              items={[
                items.advertOne,
                items.advertTwo,
                items.advertThree,
                ...(items.advertFour ? [items.advertFour] : []),
              ]}
              // advertTwo={items.advertTwo}
              // advertThree={items.advertThree}
              // advertFour={items.advertFour}
            />
          ))}
        </div>
        <div className={styles.terms_and_conditions}>
          <Link to="" className={styles.last_links}>
            Conditions of Use
          </Link>
          <Link to="" className={styles.last_links}>
            Privacy Policy
          </Link>
          <Link to="" className={styles.last_links}>
            Your Ads Privacy Choices
          </Link>
          <div className={styles.rules}>
            <CheckIcon className={styles.check} />
            <CloseIcon className={styles.close} />
          </div>
        </div>
        <span className={styles.at}>
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </>
  );
};
