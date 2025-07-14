import React from 'react'

const RecommendationForm = () => {
  return (
    <div>
      <div className="w-full max-w-[960px]">
          <div className="p-4">
            <h1 className="text-[32px] font-bold text-[#131811]">Crop Recommendation Form</h1>
            <p className="text-sm text-[#6d8560]">Provide details about your farm to receive AI-powered crop suggestions.</p>
          </div>

          {[
            { label: "Location", placeholder: "Enter your farm's location", type: "input" },
            { label: "Soil Type", type: "select" },
            { label: "Previous Crops", type: "select" },
            { label: "Water Availability", type: "select" },
            { label: "Fertilizer Access", type: "select" },
            { label: "Market Demand Preferences", type: "select" },
          ].map(({ label, placeholder, type }) => (
            <div key={label} className="px-4 py-3 max-w-[480px]">
              <label className="flex flex-col">
                <span className="text-base font-medium text-[#131811] pb-2">{label}</span>
                {type === "input" ? (
                  <input
                    placeholder={placeholder}
                    className="h-14 p-4 rounded-xl bg-[#ecf0ea] text-base text-[#131811] focus:outline-none"
                  />
                ) : (
                  <select className="h-14 p-4 rounded-xl bg-[#ecf0ea] text-base text-[#131811] focus:outline-none">
                    <option>Select {label.toLowerCase()}</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                )}
              </label>
            </div>
          ))}

          <div className="px-4 py-3 flex justify-end">
            <button className="rounded-full bg-[#c5e0b7] h-10 px-4 text-sm font-bold text-[#131811]">
              Get Recommendations
            </button>
          </div>
          </div>
    </div>
  )
}

export default RecommendationForm
