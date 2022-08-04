import React from "react";
import { useState } from "react";
import "../components/SearchBar.css";
// import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder, data }) => {
  const [filterWord, setFilterWord] = useState([]);
  const [wordEntered, setWordEntered] = useState([]);

  const inputHandle = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
  };
  return (
    <>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={inputHandle}
          />
          <div className="searchIcon">
            {/* <SearchIcon/> */}
            search
          </div>
        </div>
        <div className="dataResult">
          {data.map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
