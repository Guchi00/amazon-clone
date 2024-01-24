import React from "react";
import { Select } from "antd";
import styles from "./styles.module.css";

export const AmazonSearch = () => (
  <Select
    showSearch
    // style={{ width: 800, height: 40, marginTop: 10, borderRadius: "none" !important;}}
    className={styles.showSearch}
    placeholder="Search Amazon"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? "").includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? "")
        .toLowerCase()
        .localeCompare((optionB?.label ?? "").toLowerCase())
    }
    options={[
      {
        value: "1",
        label: "Not Identified",
        to: "/cart",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
      {
        value: "4",
        label: "Identified",
      },
      {
        value: "5",
        label: "Resolved",
      },
      {
        value: "6",
        label: "Cancelled",
      },
    ]}
  />
);

// {
//   label: <a href="https://www.antgroup.com">1st menu item</a>,
//   key: '0',
// },
