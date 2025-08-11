import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
  localStorage.setItem("loggedIn", false);
  const [user, setUser] = useState({
    emailOrusername: "",
    password: "",
    rememberMe: "",
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = () => {
    localStorage.setItem("loggedIn", "true");
    window.dispatchEvent(new Event("loggedInChanged"));
  };
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fafbf9] overflow-x-hidden"
      style={{
        fontFamily: "Lexend, 'Noto Sans', sans-serif",
        "--checkbox-tick-svg":
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(19,24,17)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
      }}
    >
      <div className="flex h-full grow flex-col">
        <div className="px-10 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-[512px] max-w-[960px] flex-1 py-5">
            <h2 className="text-[#131811] text-[28px] font-bold leading-tight text-center pb-3 pt-5">
              Welcome back
            </h2>

            <div className="flex flex-wrap items-end gap-4 px-4 py-3 max-w-[480px]">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#131811] text-base font-medium pb-2">
                  Email
                </p>
                <input
                  name="emailOrusername"
                  placeholder="Enter your email"
                  className="form-input w-full rounded-xl border border-[#d9e1d6] bg-[#fafbf9] p-[15px] text-base text-[#131811] placeholder-[#6d8560] focus:outline-none focus:ring-0 h-14"
                  type="email"
                  value={user.emailOrusername}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="flex flex-wrap items-end gap-4 px-4 py-3 max-w-[480px]">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#131811] text-base font-medium pb-2">
                  Password
                </p>
                <div className="flex items-stretch w-full rounded-xl">
                  <input
                    name="password"
                    placeholder="Enter your password"
                    className="form-input w-full flex-1 rounded-l-xl border border-[#d9e1d6] bg-[#fafbf9] p-[15px] text-base text-[#131811] placeholder-[#6d8560] focus:outline-none focus:ring-0 h-14"
                    type="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <div className="flex items-center justify-center pr-[15px] border border-[#d9e1d6] border-l-0 rounded-r-xl bg-[#fafbf9] text-[#6d8560]">
                    <h4>eye</h4>
                  </div>
                </div>
              </label>
            </div>

            <div className="flex items-center justify-between px-4 min-h-14">
              <p className="text-[#131811] text-base font-normal truncate">
                Remember me
              </p>

              <input
                name="rememberMe"
                type="checkbox"
                className="h-5 w-5 rounded border-[#d9e1d6] border-2 bg-transparent text-[#c5e0b7] checked:bg-[#c5e0b7] checked:border-[#c5e0b7] checked:bg-[image:var(--checkbox-tick-svg)] focus:ring-0 focus:outline-none cursor-pointer"
                value={user.rememberMe}
                onChange={handleChange}
              />
            </div>
            <Link to="/forgotpassword">
              <p className="text-[#6d8560] text-sm px-4 underline pt-1 pb-3">
                Forgot password?
              </p>
            </Link>

            <div className="px-4 py-3">
              <button
                className="w-full h-12 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer font-bold"
                onClick={handleClick}
              >
                Log in
              </button>
            </div>

            <p className="text-[#6d8560] text-sm text-center px-4 underline pt-1 pb-3">
              Don't have an account? Sign up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
