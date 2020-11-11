import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <SearchIcon />
      <input name="search" type="text" placeholder="Search or start new chat" />
    </div>
  );
};

export default Search;
