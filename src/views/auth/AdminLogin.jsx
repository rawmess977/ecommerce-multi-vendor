import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";

import { PropagateLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import {useNavigate} from 'react-router-dom'
const AdminLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage]);
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate('/')
    }
  }, [successMessage]);

  return (
    <div className="min-w-screen min-h-screen bg-[$cdcae9] flex justify-center items-center ">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img
                src="../../../public/images/logo.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </div>
          <form action="" onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-medium "
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
                onChange={inputHandle}
                value={state.value}
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-medium "
                type="password"
                name="password"
                placeholder="Email"
                id="password"
                required
                onChange={inputHandle}
                value={state.value}
              />
            </div>

            <button
              disabled={loader ? true : false}
              className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mt-4 "
            >
              {loader ? (
                <PropagateLoader
                  color="#fff"
                  cssOverride={{
                    display: "flex",
                    margin: "0 auto",
                    height: "24px",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
