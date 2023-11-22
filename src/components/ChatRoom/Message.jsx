import { Avatar, Typography } from "antd";
import React from "react";

function Message({ text, displayName, photoURL, createAt }) {
  return (
    <div className="mb-3">
      <div>
        <Avatar size="small" src={photoURL}>A</Avatar>
        <Typography.Text className="ms-2"><strong>{displayName}</strong></Typography.Text>
        <Typography.Text className="ms-3"><small>{createAt}</small></Typography.Text>
      </div>
        <Typography.Text className="ms-5">{text}</Typography.Text>
      <div></div>
    </div>
  );
}

export default Message;
