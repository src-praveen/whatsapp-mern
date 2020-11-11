import React from "react";
import { Done, DoneAll } from "@material-ui/icons";
import "./message.css";

const Message = ({ recevied }) => {
  return (
    <p className={`chat_message ${recevied && "&& recevied_message"} `}>
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
  );
};

export default Message;
