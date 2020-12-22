import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          anilakodukula
          <span className="message__timestamp">
            This is a message timestamp
          </span>
        </h4>
      </div>
    </div>
  );
}

export default Message;
