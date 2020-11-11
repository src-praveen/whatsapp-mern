import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLargeRounded, MoreVert } from "@material-ui/icons";
import React from "react";

import Search from "./components/search/search";
import SearchInfo from "./components/search-info/search-info";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://play-lh.googleusercontent.com/vwugrrKGozVdQptulXC6tzHVRyt-EJu_mULhW5uDFGFwIulU48IuOJ3LWo4rBLpX0AbL=s128-rw" />
        <div className="sidebar__header_right">
          <IconButton>
            <DonutLargeRounded />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <Search />
      </div>

      <div className="sidebar__chat_search">
        <SearchInfo />
        <SearchInfo />
        <SearchInfo />
      </div>
    </div>
  );
};

export default Sidebar;
