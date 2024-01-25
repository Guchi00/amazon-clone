import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles.module.css";

export interface INewSearchBarType {
  placeholder: string;
  data: {
    id: number;
    imageUrl: string;
    title: string;
    cost: number;
    name: string;
    link: string;
  }[];
}

export const SearchBar = (props: INewSearchBarType) => {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState<INewSearchBarType["data"]>(
    []
  );
  const [textEntered, setTextEntered] = useState("");

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setTextEntered(searchWord);
    const filterResult = props.data.filter((value) => {
      return value.name
        .toLocaleLowerCase()
        .includes(searchWord.toLocaleLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filterResult);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setTextEntered("");
  };

  return (
    <div className={styles.search}>
      <div className={styles.search_inputs}>
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={handleFilter}
          value={textEntered}
        />
        <div className={styles.search_icon}>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clear_btn" onClick={clearInput} />
          )}
        </div>
      </div>

      {filteredData.length !== 0 && (
        <div className={styles.data_result}>
          {filteredData.slice(0, 10).map((value, key) => {
            return (
              <Link className={styles.data_item} to={value.link}>
                <p>{value.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
