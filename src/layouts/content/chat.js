import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  Search,
  Mood,
  Mic,
  Done,
  DoneAll,
} from "@material-ui/icons";
import React, { useState } from "react";
import Message from "../../components/message/message";
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
      <div className="chathistory__content">
        {/* <p className="chat_message recevied_message">
          Hi
          <span className="message__time">
            {new Date().getHours().toString() +
              ":" +
              new Date().getMinutes().toString()}
          </span>
          <span className="tick">
            <DoneAll />
          </span>
        </p>
        <p className="chat_message">
          Tel me sir
          <span className="message__time">
            {new Date().getHours().toString() +
              ":" +
              new Date().getMinutes().toString()}
          </span>
          <span className="tick tick_read">
            <DoneAll />
          </span>
        </p>
        <p className="chat_message">
          what is the issue id
          <span className="message__time">
            {new Date().getHours().toString() +
              ":" +
              new Date().getMinutes().toString()}
          </span>
          <span className="tick">
            <Done />
          </span>
        </p> */}
        <Message recevied={false} />
        <Message recevied={true} />
        <Message recevied={false} />
      </div>
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
