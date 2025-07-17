import React from 'react'

const DataInput = () => {
  return (
    <div>
      <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Data Input</h2>
            <div className="flex gap-3 flex-wrap px-4 pb-8">
              {[
                { label: "Manual Input", primary: true },
                { label: "Automated Feed", primary: false },
              ].map((btn, idx) => (
                <button
                  key={idx}
                  className={`h-10 px-4 rounded-full text-sm font-bold tracking-[0.015em] ${
                    btn.primary ? "bg-[#4ab714] text-[#121b0e]" : "bg-[#ebf3e7] text-[#121b0e]"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
    </div>
  )
}

export default DataInput
