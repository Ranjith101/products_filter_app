import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./search.css";

const SearchBar = ({ value, changeInput }) => (
  <div className="searchbar-wrap">
    <SearchIcon className="search-icon" />
    <input
      type="text"
      placeholder="Search here"
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
