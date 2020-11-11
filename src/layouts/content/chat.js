import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, Search, Mood, Mic } from "@material-ui/icons";
import React, { useState } from "react";
import "./chat.css";

const Chat = () => {
  const [isHomePage, setIsHomePage] = useState(false);

  return (
    <div className="chat">
      <div className="chathistory__header">
        <Avatar />
        <div className="chathistory__header_middle">
          <h5>Name</h5>
          <p>last seen message</p>
        </div>
        <div className="chathistory__header__right">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chathistory__content">content</div>
      <div className="chathistory__message">
        <IconButton>
          <Mood />
        </IconButton>
        <IconButton className="attachment">
          <AttachFile />
        </IconButton>
        <div className="chathistory__message_text">
          <input type="text" placeholder="Type a message" />
        </div>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
