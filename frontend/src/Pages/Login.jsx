import React from "react";

const LoginForm = () => {
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
                  placeholder="Enter your email"
                  className="form-input w-full rounded-xl border border-[#d9e1d6] bg-[#fafbf9] p-[15px] text-base text-[#131811] placeholder-[#6d8560] focus:outline-none focus:ring-0 h-14"
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
                    type="password"
                    placeholder="Enter your password"
                    className="form-input w-full flex-1 rounded-l-xl border border-[#d9e1d6] bg-[#fafbf9] p-[15px] text-base text-[#131811] placeholder-[#6d8560] focus:outline-none focus:ring-0 h-14"
                  />
                  <div className="flex items-center justify-center pr-[15px] border border-[#d9e1d6] border-l-0 rounded-r-xl bg-[#fafbf9] text-[#6d8560]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            <div className="flex items-center justify-between px-4 min-h-14">
              <p className="text-[#131811] text-base font-normal truncate">
                Remember me
              </p>
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-[#d9e1d6] border-2 bg-transparent text-[#c5e0b7] checked:bg-[#c5e0b7] checked:border-[#c5e0b7] checked:bg-[image:var(--checkbox-tick-svg)] focus:ring-0 focus:outline-none"
              />
            </div>

            <p className="text-[#6d8560] text-sm px-4 underline pt-1 pb-3">
              Forgot password?
            </p>

            <div className="px-4 py-3">
              <button className="w-full h-12 rounded-full bg-[#c5e0b7] text-[#131811] text-base font-bold">
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
