import React from "react";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import styles from "./styles.module.css";

const items: MenuProps["items"] = [
  {
    label: <Link to="/games">Games Essentials</Link>,
    key: "0",
  },
  {
    label: <Link to="/headsets">Headsets</Link>,
    key: "1",
  },
  // {
  //   type: "divider",
  // },
  {
    label: <Link to="/chairs">Gaming Chairs</Link>,
    key: "2",
  },
  {
    label: <Link to="/mices">Gaming Mouses</Link>,
    key: "3",
  },
  {
    label: <Link to="/keyboards">Keyboards</Link>,
    key: "4",
  },
];

export const ProductsMenu: React.FC = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <Space className={styles.space}>
        <span className={styles.all}>All</span>
        <ArrowDropDownOutlinedIcon className={styles.arrow_icon} />
      </Space>
    </a>
  </Dropdown>
);
