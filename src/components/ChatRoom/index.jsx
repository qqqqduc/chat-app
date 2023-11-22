import React from "react";
import SideBar from "./SideBar";
import ChatWindow from "./ChatWindow";

function ChatRoom(props) {
  return (
    <div className="row">
      <div className="col-3 p-0">
        <SideBar />
      </div>
      <div className="col-9 p-0">
        <ChatWindow />
      </div>
    </div>
  );
}

export default ChatRoom;
