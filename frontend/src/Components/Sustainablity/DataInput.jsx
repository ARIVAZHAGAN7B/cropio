import React, { useState } from 'react';

const DataInput = () => {
  const [selected, setSelected] = useState("Manual Input");

  const buttons = [
    { label: "Manual Input" },
    { label: "Automated Feed" },
  ];

  return (
    <div>
      <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Data Input</h2>
      <div className="flex gap-3 flex-wrap px-4 pb-8">
        {buttons.map((btn, idx) => {
          const isSelected = selected === btn.label;
          return (
            <button
              key={idx}
              onClick={() => setSelected(btn.label)}
              className={`text-sm font-bold tracking-[0.015em] ${
                isSelected
                  ? "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                  : "h-10 px-4 rounded-full bg-[#ebf3e7] text-[#121b0e]"
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DataInput;
