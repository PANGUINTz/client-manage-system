import React from "react";
import Swal from "sweetalert2";
import { useRef, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

import { setToken } from "../../services/AuthService";

const Login = () => {
  const userRef = useRef();
  const [username, setUser] = useState("");
  const [password, setPwd] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...userData, username }));

      setToken(userData?.accessToken);
      setUser("");
      setPwd("");
      Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (err) {
      if (!err) {
      } else if (err?.status === 400) {
        Swal.fire({
          icon: "error",
          title: "รหัสผ่านผิด",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (err?.originalStatus === 401) {
        Swal.fire({
          icon: "error",
          title: "ไม่มีชื่อผู้ใช้นี้",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    <h1 className="text-center">isLoading...</h1>
  ) : (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-white w-[480px] p-5 rounded-xl">
        <h5>ระบบจัดการข้อมูลลูกค้า</h5>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col my-5">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              value={username}
              onChange={handleUserInput}
              autoComplete="off"
              required
              className="p-2 border border-black rounded-lg"
            />
          </div>

          <div className="flex flex-col my-3">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              onChange={handlePwdInput}
              value={password}
              required
              autoComplete="current-password"
              className="p-2 border border-black rounded-lg"
            />
          </div>
          <button className="bg-green-500 p-2 my-3 w-full hover:bg-green-900 rounded-lg">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </section>
  );

  return content;
};

export default Login;
