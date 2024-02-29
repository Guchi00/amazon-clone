import React from "react";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import styles from "./styles.module.css";

const items: MenuProps["items"] = [
  {
    label: (
      <Link to="/toys" className={styles.items}>
        Children's toy 3 months to 10 years
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/dining" className={styles.items}>
        Dining chairs and dining decor
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/fashion" className={styles.items}>
        Female Clothing
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link to="/games" className={styles.items}>
        Games Essentials
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link to="/mices" className={styles.items}>
        Gaming Mouses
      </Link>
    ),
    key: "4",
  },
  {
    label: (
      <Link to="/chairs" className={styles.items}>
        Gaming Chairs
      </Link>
    ),
    key: "5",
  },

  {
    label: (
      <Link to="/homes" className={styles.items}>
        Home decor
      </Link>
    ),
    key: "6",
  },

  {
    label: (
      <Link to="/beauty" className={styles.items}>
        Health and Beauty
      </Link>
    ),
    key: "7",
  },
  {
    label: (
      <Link to="/headsets" className={styles.items}>
        Headsets
      </Link>
    ),
    key: "8",
  },
  {
    label: (
      <Link to="/kitchen" className={styles.items}>
        Kitchen Decor
      </Link>
    ),
    key: "9",
  },
  {
    label: (
      <Link to="/keyboards" className={styles.items}>
        Keyboards
      </Link>
    ),
    key: "10",
  },

  {
    label: (
      <Link to="/laptops" className={styles.items}>
        Laptops
      </Link>
    ),
    key: "11",
  },
  {
    label: (
      <Link to="/shoes" className={styles.items}>
        Men and Female Shoes
      </Link>
    ),
    key: "12",
  },
  {
    label: (
      <Link to="/pcs" className={styles.items}>
        Pcs
      </Link>
    ),
    key: "13",
  },
  {
    label: (
      <Link to="/watches" className={styles.items}>
        Watches and time trackers
      </Link>
    ),
    key: "14",
  },
  {
    label: (
      <Link to="/products" className={styles.items}>
        See more products
      </Link>
    ),
    key: "15",
  },
];

export const MenuBar: React.FC = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <button onClick={(e) => e.preventDefault()} className={styles.b}>
      <Space className={styles.space}>
        <span className={styles.all}>All</span>
        <ArrowDropDownOutlinedIcon className={styles.arrow_icon} />
      </Space>
    </button>
  </Dropdown>
);
