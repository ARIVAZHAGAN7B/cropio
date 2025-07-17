import React from 'react'

const Keymetrics = () => {
  return (
    <div>
      <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Key Metrics</h2>
            <div className="flex flex-wrap gap-4 p-4">
              {[
                { label: "Water Usage", value: 85 },
                { label: "Chemical Input", value: 70 },
                { label: "Crop Rotation", value: 90 },
                { label: "Soil Health", value: 75 },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col flex-1 min-w-[158px] gap-2 p-6 rounded-xl border border-[#d7e7d0]">
                  <p className="text-base font-medium">{item.label}</p>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Keymetrics
