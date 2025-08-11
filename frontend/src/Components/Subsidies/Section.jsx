import React from "react";

export default function Section({ title, icon, description, extraInfo, buttons }) {
  return (
    <div>
      <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {title}
      </h2>
      <div className="flex items-center gap-4 bg-[#f9fcf8] px-4 min-h-[72px] py-2">
        <div className="text-[#121b0e] flex items-center justify-center rounded-lg bg-[#ebf3e7] shrink-0 w-12 h-12">
          {icon}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#121b0e] text-base font-medium leading-normal line-clamp-1">
            {description}
          </p>
          <p className="text-[#67974e] text-sm font-normal leading-normal line-clamp-2">
            {extraInfo}
          </p>
        </div>
      </div>
      {buttons && (
        <div className="flex px-4 py-3 justify-start gap-2">
          {buttons.map((btn, i) => (
            <button
              key={i}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
            >
              <span className="truncate">{btn}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
