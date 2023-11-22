import React from "react";
import "./ChatWindow.scss";
import { Avatar, Input, Tooltip, Form, Button } from "antd";
import { FaUserPlus } from "react-icons/fa";
import Message from "./Message";

function ChatWindow(props) {
  return (
    <div className="chat-window">
      <div className="header py-2 px-3 d-flex justify-content-between">
        <div>
          <p className="m-0">
            <strong>Bí mật</strong>
          </p>
          <span>
            <small>Đây là phòng bí mật</small>
          </span>
        </div>
        <div className="d-flex align-items-center">
          <button
            type="text"
            className="btn btn-outline-dark d-flex align-items-center me-2"
          >
            <FaUserPlus className="me-1" />
            mời
          </button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </div>
      </div>
      <div className="separate"></div>
      <div className="content">
        <div className="message">
          <Message
            text="test"
            photoURL={null}
            displayName="đức"
            createAt={1231331232}
          />
          <Message
            text="test"
            photoURL={null}
            displayName="đức"
            createAt={1231331232}
          />
          <Message
            text="test"
            photoURL={null}
            displayName="đức"
            createAt={1231331232}
          />
          <Message
            text="test"
            photoURL={null}
            displayName="đức"
            createAt={1231331232}
          />
        </div>
        <form className="form d-flex justify-content-between align-items-center">
          <Form.Item>
            <Input bordered={false} autoComplete="off" placeholder="Nhập tin nhắn" />
          </Form.Item>
          <Button type="primary">Gửi</Button>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
