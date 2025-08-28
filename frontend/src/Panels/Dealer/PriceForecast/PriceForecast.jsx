import React from "react";

export default function PriceForecast() {
  return (
    <div className="min-h-screen bg-[#fafbf9] font-[Lexend,_'Noto_Sans',sans-serif] overflow-x-hidden">
        <main className="px-4 md:px-40 py-6">
        <div className="max-w-[960px] mx-auto">
          <div className="p-4">
            <h1 className="text-[32px] font-bold text-[#131811]">Price Forecasting</h1>
            <p className="text-sm text-[#6d8560]">
              Predict crop prices with AI for informed decisions.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4 max-w-[480px]">
            {['Crop', 'Region', 'Forecast Period'].map((label) => (
              <label key={label} className="flex flex-col gap-2">
                <span className="text-base font-medium text-[#131811]">{label}</span>
                <select className="form-input h-14 rounded-xl border border-[#d9e1d6] bg-[#fafbf9] px-4 text-base text-[#131811]">
                  <option>Select {label}</option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                </select>
              </label>
            ))}

            <div className="flex gap-3">
              <button className="h-10 px-4 rounded-full bg-[#c5e0b7] text-sm font-bold text-[#131811]">
                Forecast
              </button>
              <button className="h-10 px-4 rounded-full bg-[#ecf0ea] text-sm font-bold text-[#131811]">
                Clear
              </button>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-[22px] font-bold text-[#131811] pb-3">Forecast Results</h2>
            {[
              { label: "Current Price", value: "$15.20/bushel" },
              { label: "Predicted Price (30 days)", value: "$16.50/bushel" },
              { label: "Confidence Score", value: "85%" },
              { label: "Recommended Action", value: "Buy" },
            ].map(({ label, value }, i) => (
              <div
                key={i}
                className="mb-4 flex items-center justify-between gap-4 rounded-xl border border-[#d9e1d6] p-4"
              >
                <div>
                  <p className="text-base font-bold text-[#131811]">{label}</p>
                  <p className="text-sm text-[#6d8560]">{value}</p>
                </div>
                <div className="w-40 h-24 rounded-xl bg-cover bg-center bg-no-repeat"
                     style={{ backgroundImage: `url('https://via.placeholder.com/160x96')` }}>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4">
            <h2 className="text-[22px] font-bold text-[#131811] pb-3">Price Trend</h2>
            <div className="border border-[#d9e1d6] p-6 rounded-xl">
              <p className="text-base font-medium text-[#131811]">Historical and Predicted Prices</p>
              <p className="text-[32px] font-bold text-[#131811]">$15.80</p>
              <div className="flex items-center gap-2">
                <p className="text-[#6d8560] text-base">Last 12 Months</p>
                <p className="text-[#07881f] font-medium">+5%</p>
              </div>
              <div className="h-40 bg-[#ecf0ea] mt-4 rounded-xl"></div>
              <div className="flex justify-around mt-2 text-[#6d8560] text-xs font-bold">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-[#6d8560] px-4 pt-3 underline">
            Our AI model analyzes historical price data, weather patterns, and market trends to predict future prices. Learn more about our methodology.
          </p>
        </div>
      </main>
    </div>
  );
}
