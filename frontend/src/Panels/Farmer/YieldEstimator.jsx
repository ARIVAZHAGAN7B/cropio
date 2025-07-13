import React from "react";

export default function YieldEstimator() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f9fcf8] group/design-root overflow-x-hidden"
      style={{
        fontFamily: 'Lexend, "Noto Sans", sans-serif',
        "--select-button-svg":
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(103,151,78)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">

        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#121b0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Crop Yield Prediction
              </p>
            </div>

            {/* Crop Select */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border border-[#d7e7d0] bg-[#f9fcf8] focus:border-[#d7e7d0] h-14 bg-[image:--select-button-svg] placeholder:text-[#67974e] p-[15px] text-base font-normal leading-normal"
                  defaultValue="one"
                  aria-label="Select Crop"
                >
                  <option value="one" disabled>
                    Select Crop
                  </option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>

            {/* Land Area Input */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Land Area (in acres)"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border border-[#d7e7d0] bg-[#f9fcf8] focus:border-[#d7e7d0] h-14 placeholder:text-[#67974e] p-[15px] text-base font-normal leading-normal"
                  defaultValue=""
                  aria-label="Land Area"
                />
              </label>
            </div>

            {/* Other Select Inputs */}
            {[
              "Soil Type",
              "Water Availability",
              "Irrigation Method",
              "Fertilizer Use",
              "Pesticide Use",
              "Sowing Month",
              "Harvest Month",
              "Farming Method",
            ].map((label, idx) => (
              <div
                key={idx}
                className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
              >
                <label className="flex flex-col min-w-40 flex-1">
                  <select
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border border-[#d7e7d0] bg-[#f9fcf8] focus:border-[#d7e7d0] h-14 bg-[image:--select-button-svg] placeholder:text-[#67974e] p-[15px] text-base font-normal leading-normal"
                    defaultValue="one"
                    aria-label={label}
                  >
                    <option value="one" disabled>
                      {label}
                    </option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                  </select>
                </label>
              </div>
            ))}

            {/* Predict Button */}
            <div className="flex max-w-[480px] px-4 py-3 justify-end">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#4ab714] text-[#121b0e] text-sm font-bold leading-normal tracking-[0.015em]"
                type="button"
                aria-label="Predict Yield"
              >
                <span className="truncate">Predict Yield</span>
              </button>
            </div>

            {/* Yield Result Section */}
            <div className="p-4">
              <div
                className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAB1Uu5eS3hT6E8hJk0EK6KL701j2_bDfnfAIWfcBecaHGGb8l7kdJ6Gn92H_C5G-8yJKdKqaNg8huhZK1jLmGKPTZiJD75W6hMB9Ytvk7mJXHRJpEj3D73_7W6kIdDdia3AEQTZCUj7AIZpTvJR8hZ9GJqvOzJR42oSHgmrGFaiXrL-ZzplDJ4cRPPFVbkrtzV6P50QReQOa79XwVHI4RpMr4829USLJ7xB9UXdYpU8c9hnx5O5_X88exC6_kChrLba_I4eoFlsu8")',
                }}
              >
                <div className="flex w-full items-end justify-between gap-4 p-4">
                  <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                    <p className="text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]">
                      Estimated Yield: 2500 kg/acre
                    </p>
                    <p className="text-white text-base font-medium leading-normal">
                      Compared to the average yield of 2200 kg/acre in your region,
                      your predicted yield is higher. Factors influencing your yield
                      include soil type and irrigation method. Tips for improvement:
                      Optimize fertilizer use and consider crop rotation. Confidence
                      Score: 85%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
