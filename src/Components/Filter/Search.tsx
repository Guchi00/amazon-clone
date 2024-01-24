import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";
import all from "../../Data/all.json";
import styles from "./styles.module.css";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(all);

  const handleSearch = (event: any): void => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredResults = all.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredData(filteredResults);
  };
  return (
    <div>
      <Select
        showSearch
        placeholder="Search..."
        defaultValue={searchTerm}
        onChange={handleSearch}
        className={styles.container}
      >
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>
              <Link to={item.title}>{item.title}</Link>
              <p>Price: ${item.cost.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </Select>
    </div>
  );
};
