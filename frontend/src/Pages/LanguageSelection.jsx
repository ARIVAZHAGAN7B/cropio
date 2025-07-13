import React from "react";

const LanguageSelection = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f9fcf8] overflow-x-hidden"
      style={{
        fontFamily: 'Lexend, "Noto Sans", sans-serif',
        "--select-button-svg":
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(103,151,78)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
      }}
    >
      <div className="flex h-full grow flex-col items-center justify-center px-10 py-5">
        <div className="flex w-full max-w-[512px] flex-col py-5">
          <h2 className="text-[#121b0e] text-[28px] font-bold leading-tight text-center pb-3 pt-5">
            Select Your Preferred Language
          </h2>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#121b0e] text-base font-medium pb-2">Language</p>
              <select
                className="form-input w-full flex-1 rounded-xl text-[#121b0e] focus:outline-0 border border-[#d7e7d0] bg-[#f9fcf8] focus:border-[#d7e7d0] h-14 p-[15px] text-base font-normal bg-[image:var(--select-button-svg)] placeholder:text-[#67974e]"
              >
                <option value="one">Select Language</option>
                <option value="two">two</option>
                <option value="three">three</option>
              </select>
            </label>
          </div>

          {[
            { name: "தமிழ்", translit: "Tamil" },
            { name: "हिन्दी", translit: "Hindi" },
            { name: "తెలుగు", translit: "Telugu" },
            { name: "मराठी", translit: "Marathi" },
          ].map((lang, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#f9fcf8] px-4 min-h-[72px] py-2"
            >
              <div className="flex items-center justify-center rounded-lg bg-[#ebf3e7] text-[#121b0e] size-12 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M34.76,42A8,8,0,0,0,32,48V216a8,8,0,0,0,16,0V171.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V48A8,8,0,0,0,210.76,42c-28,24.23-51.72,12.49-79.21-1.12C103.07,26.76,70.78,10.79,34.76,42ZM208,164.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V51.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#121b0e] text-base font-medium">{lang.name}</p>
                <p className="text-[#67974e] text-sm">{lang.translit}</p>
              </div>
            </div>
          ))}

          <div className="flex justify-center px-4 py-3">
            <button className="flex h-10 min-w-[84px] max-w-[480px] items-center justify-center rounded-full bg-[#4ab714] px-4 text-sm font-bold text-[#121b0e] tracking-[0.015em]">
              <span className="truncate">Save Language</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
