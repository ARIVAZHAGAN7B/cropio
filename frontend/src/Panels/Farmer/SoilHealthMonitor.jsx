import React from "react";

export default function SoilHealthMonitor() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fafbf9] overflow-x-hidden"
      style={{
        fontFamily: 'Lexend, "Noto Sans", sans-serif',
        "--select-button-svg":
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(109,133,96)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
      }}
    >
      <main className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#131811] tracking-light text-[32px] font-bold leading-tight">
                Soil Health Monitoring
              </p>
              <p className="text-[#6d8560] text-sm font-normal leading-normal">
                Track and improve your soil's health for optimal crop yields.
              </p>
            </div>
          </div>

          <h3 className="text-[#131811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Data Input
          </h3>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#131811] text-base font-medium leading-normal pb-2">
                Data Source
              </p>
              <select
                className="form-input flex w-full min-w-0 flex-1 rounded-xl text-[#131811] border border-[#d9e1d6] bg-[#fafbf9] h-14 p-[15px] text-base font-normal leading-normal focus:outline-none focus:ring-0 focus:border-[#d9e1d6]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select data source
                </option>
                <option value="one">one</option>
                <option value="two">two</option>
                <option value="three">three</option>
              </select>
            </label>
          </div>

          {[
            { label: "pH Value", placeholder: "" },
            { label: "Organic Matter (%)", placeholder: "" },
            { label: "Nitrogen (N) ppm", placeholder: "" },
            { label: "Phosphorus (P) ppm", placeholder: "" },
            { label: "Potassium (K) ppm", placeholder: "" },
          ].map(({ label, placeholder }, idx) => (
            <div
              key={idx}
              className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
            >
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#131811] text-base font-medium leading-normal pb-2">
                  {label}
                </p>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="form-input flex w-full min-w-0 flex-1 rounded-xl text-[#131811] border border-[#d9e1d6] bg-[#fafbf9] h-14 p-[15px] text-base font-normal leading-normal focus:outline-none focus:ring-0 focus:border-[#d9e1d6]"
                  defaultValue=""
                />
              </label>
            </div>
          ))}

          <div className="flex px-4 py-3 justify-end">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#c5e0b7] text-[#131811] text-sm font-bold leading-normal tracking-[0.015em]"
              type="button"
            >
              <span className="truncate">Update Soil Data</span>
            </button>
          </div>

          <h3 className="text-[#131811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Soil Health Visualization
          </h3>

          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2">
              <p className="text-[#131811] text-base font-medium leading-normal">
                Soil Nutrient Levels
              </p>
              <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                <div
                  className="border-[#6d8560] bg-[#ecf0ea] border-t-2 w-full"
                  style={{ height: "40%" }}
                ></div>
                <p className="text-[#6d8560] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  N
                </p>
                <div
                  className="border-[#6d8560] bg-[#ecf0ea] border-t-2 w-full"
                  style={{ height: "80%" }}
                ></div>
                <p className="text-[#6d8560] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  P
                </p>
                <div
                  className="border-[#6d8560] bg-[#ecf0ea] border-t-2 w-full"
                  style={{ height: "90%" }}
                ></div>
                <p className="text-[#6d8560] text-[13px] font-bold leading-normal tracking-[0.015em]">
                  K
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#fafbf9] px-4 min-h-14 justify-between">
            <p className="text-[#131811] text-base font-normal leading-normal flex-1 truncate">
              Soil Score
            </p>
            <div className="shrink-0">
              <div className="flex w-7 h-7 items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#07881f]"></div>
              </div>
            </div>
          </div>

          <h3 className="text-[#131811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Improvement Suggestions
          </h3>

          <p className="text-[#131811] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Based on your soil data, consider the following actions to improve
            soil health:
          </p>

          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M247.63,39.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,151c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,168,54.58,54.58,0,0,0,87,162.33l25,25V216a8,8,0,0,0,16,0V186.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,133.21,250.67,91.65,247.63,39.89ZM47.81,147.6C32.47,138.31,23.79,116.32,24,88c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,114.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,153.24,55.82,152.45,47.81,147.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,128c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,90.34,220.14,123.44,197.12,137.38Z"></path>
                </svg>
              ),
              title: "Apply Organic Amendments",
              desc: "Enhance soil structure and nutrient content.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M197.67,186.37a8,8,0,0,1,0,11.29C196.58,198.73,170.82,224,128,224c-37.39,0-64.53-22.4-80-39.85V208a8,8,0,0,1-16,0V160a8,8,0,0,1,8-8H88a8,8,0,0,1,0,16H55.44C67.76,183.35,93,208,128,208c36,0,58.14-21.46,58.36-21.68A8,8,0,0,1,197.67,186.37ZM216,40a8,8,0,0,0-8,8V71.85C192.53,54.4,165.39,32,128,32,85.18,32,59.42,57.27,58.34,58.34a8,8,0,0,0,11.3,11.34C69.86,69.46,92,48,128,48c35,0,60.24,24.65,72.56,40H168a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V48A8,8,0,0,0,216,40Z"></path>
                </svg>
              ),
              title: "Implement Crop Rotation",
              desc: "Rotate crops to balance nutrient uptake and reduce pests.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47"/>
                </svg>
              ),
              title: "Maintain Proper Irrigation",
              desc: "Ensure consistent water supply to prevent stress.",
            },
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 border-b border-[#d9e1d6] px-4 py-4 last:border-none"
            >
              <div className="text-[#6d8560] shrink-0">{icon}</div>
              <div className="flex flex-col">
                <p className="text-[#131811] font-semibold text-base">{title}</p>
                <p className="text-[#6d8560] text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
