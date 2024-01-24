import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd";
import all from "../../Data/all.json";

type Product = (typeof all)[number];

export const SearchAntd: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = all.find((p) => p.id === Number(id));

  const getRandomInt = (max: number, min = 0) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const searchResult = (query: Product) =>
    new Array(getRandomInt(5))
      .join(".")
      .split(".")
      .map((_, idx) => {
        const category = `${query}${idx}`;
        return {
          value: category,
          label: (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>
                Found {query.title} on{" "}
                <Link
                  to={`/product/${query.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {category}
                </Link>
              </span>
              <span>{getRandomInt(200, 100)} results</span>
            </div>
          ),
        };
      });

  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearch = (value: any) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{ width: 300 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      size="large"
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};
