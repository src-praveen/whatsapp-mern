import { Avatar } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import React from "react";
import "./chat-home.css";
function ChatHome() {
  return (
    <div className="chathome">
      <WhatsAppIcon />
      <h2>Keep your phone connected</h2>
      <p>
        WhatsApp connects to your phone to sync messages. To reduce data usage,
        connect your phone to Wi-Fi.
      </p>
    </div>
  );
}

export default ChatHome;
