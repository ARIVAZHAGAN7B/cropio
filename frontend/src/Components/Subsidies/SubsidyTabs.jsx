import React from "react";

export default function SubsidyTabs( { activeTab, setActiveTab }) {
  const tabs = ["Crop Insurance", "Loans", "Subsidies"];

  return (
    <div className="pb-3">
      <div className="flex border-b border-[#d7e7d0] px-4 gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
              activeTab === tab
                ? "border-b-[#4ab714] text-[#121b0e]"
                : "border-b-transparent text-[#67974e]"
            }`}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">
              {tab}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
