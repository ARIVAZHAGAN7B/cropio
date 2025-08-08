import React from "react";

const CultivationGuide = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafbf9] p-6 font-[Lexend,Noto Sans,sans-serif]">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-6">
          <label className="flex w-full h-12">
            <div className="flex items-center pl-4 bg-[#ecf0ea] rounded-l-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              placeholder="Search crops"
              className="w-full bg-[#ecf0ea] px-4 text-[#131811] placeholder-[#6d8560] rounded-r-xl focus:outline-none"
            />
          </label>
        </div>

        {/* Cultivation Guide Section */}
        <h2 className="text-[#131811] text-2xl font-bold pb-4">Cultivation Guide – Rice</h2>
        <div className="flex flex-col gap-3">
          {[
            "Sowing Instructions",
            "Irrigation Schedule",
            "Fertilizer Chart",
            "Pest and Weed Control",
            "Harvest Readiness",
            "Estimated Cost and Yield",
          ].map((section) => (
            <details key={section} className="border border-[#d9e1d6] bg-white rounded-xl px-4 py-2">
              <summary className="cursor-pointer font-medium text-[#131811] py-2">{section}</summary>
              <p className="text-[#6d8560] text-sm pb-2">Content coming soon...</p>
            </details>
          ))}
        </div>

        {/* Calendar Section */}
        <h2 className="text-[#131811] text-2xl font-bold pt-10 pb-4">Agricultural Calendar – July 2024</h2>
        <div className="grid grid-cols-7 gap-1 text-center text-sm text-[#131811] font-medium">
          {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
            <div key={d} className="h-10 flex items-center justify-center font-bold">{d}</div>
          ))}
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i + 1}
              className={`h-10 flex items-center justify-center rounded-full ${i + 1 === 5 ? "bg-[#c5e0b7]" : ""}`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <p className="text-[#6d8560] text-sm pt-4">Current Stage: Vegetative Growth</p>
      </div>
    </div>
  );
};

export default CultivationGuide;
