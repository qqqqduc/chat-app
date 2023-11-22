import React, { useState } from "react";
import { Avatar } from "antd";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Collapse } from "antd";
import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import "./SideBar.scss";

function SideBar(props) {
  const navigate = useNavigate();

  const { Panel } = Collapse;

  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {});
  };

  return (
    <div className="sidebar">
      <div className="d-flex justify-content-between px-3 py-2  sidebar-top">
        <div>
          <Avatar>D</Avatar>
          <span className="sidebar-top__text">abc</span>
        </div>
        <button className="btn btn-outline-light" onClick={handleLogout}>
          Đăng xuất
        </button>
      </div>
      <div className="separate"></div>
      <div className="sidebar-bot">
        <Collapse ghost defaultActiveKey={["1"]}>
          <Panel header="Danh sách các phòng" key="1">
            <p>
              <Link to="#">room1</Link>
            </p>
            <p>
              <Link to="#">room2</Link>
            </p>
            <p>
              <Link to="#">room3</Link>
            </p>
            <p>
              <Link to="#">room4</Link>
            </p>
            <button className="d-flex align-items-center btn btn-outline-light">
              <FaRegPlusSquare className="button-icon" />
              Thêm phòng
            </button>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default SideBar;
