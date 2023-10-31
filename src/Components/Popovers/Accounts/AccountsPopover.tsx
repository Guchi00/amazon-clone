import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Popover, Segmented } from "antd";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
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
    <Link to="/register" className={styles.start_here} >Start here.</Link>
  </div>
</div>

);


const content = (
  <div className={styles.content}>
    <div className={styles.left_content}>
      <span className={styles.your_list}>Your Lists</span>
      <a className={styles.left_content_a}>Create a list</a>
      <a className={styles.left_content_a} href="https://www.amazon.com/registries?ref_=nav_ListFlyout_find">Find a list or Registry</a>
    </div>
    <div className={styles.right_content}>
      <span className={styles.your_account}>Your Account</span>
      <a className={styles.right_content_a}>Account</a>
      <a className={styles.right_content_a}>Orders</a>
      <a className={styles.right_content_a}>Recommendations</a>
      <a className={styles.right_content_a}>Browsing history</a>
      <a className={styles.right_content_a}>Watchlist</a>
      <a className={styles.right_content_a}>Video purchases & Rentals</a>
      <a className={styles.right_content_a}>Kindle Unlimited</a>
      <a className={styles.right_content_a}>Content & Devices</a>
      <a className={styles.right_content_a}>Subscribe and Save Item</a>
      <a className={styles.right_content_a}>Memberships & Subscriptions</a>
      <a className={styles.right_content_a}>Music Library</a>
    </div>
  </div>
);



export function AccountsPopover() {
  const [showArrow, setShowArrow] = React.useState(true);
  const [arrowAtCenter, setArrowAtCenter] = React.useState(false);

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
      <div className={styles.holder}>
        <span className={styles.hello_signin}>Hello, Sign  in</span>
        <span className={styles.account_and_list}>Account & List</span>
        {/* <ArrowDropDownOutlinedIcon className={styles.arrowdownIcon} /> */}
      </div>
    </Popover>
    </>
  )
}
