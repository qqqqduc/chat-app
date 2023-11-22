import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/')
        console.log(result)
      })
      .catch((error) =>
        // Xác thực thất bại, xử lý lỗi tại đây
        console.log("Đăng nhập bằng tài khoản Google thất bại:", error)
      );
  };

  return (
    <div>
      <h2 className="my-4 text-center">Đăng nhập Fun Chat</h2>
      <div className="d-flex flex-column align-items-center">
        <button
          className="col-4 mb-1 btn btn-outline-secondary"
          onClick={(e) => handleLogin(e)}
        >
          Đăng nhập bằng Google
        </button>
        <button className="col-4 mb-1 btn btn-outline-secondary">
          Đăng nhập bằng Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
