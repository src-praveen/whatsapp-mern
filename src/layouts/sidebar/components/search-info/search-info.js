import { Avatar, Badge } from "@material-ui/core";
import React from "react";
import "./search-info.css";
const SearchInfo = () => {
  return (
    <div className="search__info">
      <Avatar />
      <div className="search__info_middle">
        <h4>Title</h4>
        <p>subtitle</p>
      </div>
      <div className="search__info_right">
        <p>6.41 PM</p>
        <Avatar>
          <p>1</p>
        </Avatar>
      </div>
    </div>
  );
};

export default SearchInfo;
