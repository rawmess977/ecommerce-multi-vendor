import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useState } from "react";

const AdminLogin = () => {
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
    console.log(state);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[$cdcae9] flex justify-center items-center ">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img src="../../../public/images/logo.png" alt="logo" className="w-full h-full" />
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

            <button className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mt-4 ">
              Login
            </button>

            
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
