import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Popover } from "antd";
import styles from "./styles.module.css";

const text = (
  <div className={styles.parent}>
    <div>
      <Link to="/login">
        <button className={styles.signin_btn}>Sign in</button>
      </Link>
    </div>
    <div className={styles.new}>
      <span className={styles.new_customer}>New Customer? </span>
      <Link to="/register" className={styles.start_here}>
        Start here.
      </Link>
    </div>
  </div>
);

const content = (
  <div className={styles.content}>
    <div className={styles.left_content}>
      <span className={styles.your_list}>Your Lists</span>
      <Link to="" className={styles.left_content_a}>
        Create a list
      </Link>
      <Link to="" className={styles.left_content_a}>
        Find a list or Registry
      </Link>
    </div>
    <div className={styles.right_content}>
      <span className={styles.your_account}>Your Account</span>
      <Link to="" className={styles.right_content_a}>
        Account
      </Link>
      <Link to="" className={styles.right_content_a}>
        Orders
      </Link>
      <Link to="" className={styles.right_content_a}>
        Recommendations
      </Link>
      <Link to="" className={styles.right_content_a}>
        Browsing history
      </Link>
      <Link to="" className={styles.right_content_a}>
        Watchlist
      </Link>
      <Link to="" className={styles.right_content_a}>
        Video purchases & Rentals
      </Link>
      <Link to="" className={styles.right_content_a}>
        Kindle Unlimited
      </Link>
      <Link to="" className={styles.right_content_a}>
        Content & Devices
      </Link>
      <Link to="" className={styles.right_content_a}>
        Subscribe and Save Item
      </Link>
      <Link to="" className={styles.right_content_a}>
        Memberships & Subscriptions
      </Link>
      <Link to="" className={styles.right_content_a}>
        Music Library
      </Link>
    </div>
  </div>
);

export function Accounts() {
  const [showArrow] = React.useState(true);
  const [arrowAtCenter] = React.useState(false);

  const mergedArrow = useMemo(() => {
    if (arrowAtCenter) return { pointAtCenter: true };
    return showArrow;
  }, [showArrow, arrowAtCenter]);

  return (
    <>
      <Popover
        placement="bottomLeft"
        title={text}
        content={content}
        arrow={mergedArrow}
      >
        <Link to="/login" className={styles.login_link}>
          <div className={styles.holder}>
            <span className={styles.hello_signin}>Hello, Sign in</span>
            <span className={styles.account_and_list}>Account & List</span>
          </div>
        </Link>
      </Popover>
    </>
  );
}
