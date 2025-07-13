import React from "react";

export default function DiseaseDetection() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fafbf9] overflow-x-hidden"
      style={{
        fontFamily: 'Lexend, "Noto Sans", sans-serif',
        ['--select-button-svg'.toString()]:
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(109,133,96)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
      }}
    >
      <main className="px-40 py-5 flex justify-center">
        <div className="flex flex-col max-w-[960px] w-full">
          <p className="text-[32px] font-bold px-4">Plant Health Detection</p>

          {[1, 2, 3].map((i) => (
            <div key={i} className="max-w-[480px] px-4 py-3">
              <select className="form-input w-full h-14 rounded-xl border border-[#d9e1d6] bg-[#fafbf9] p-[15px] text-base">
                <option value="one"></option>
                <option value="two">two</option>
                <option value="three">three</option>
              </select>
            </div>
          ))}

          <h2 className="text-[22px] font-bold px-4 pt-5 pb-3">Upload Image or Use Camera</h2>
          <div className="p-4">
            <div className="flex flex-col items-center gap-6 border-2 border-dashed border-[#d9e1d6] rounded-xl px-6 py-14">
              <p className="text-lg font-bold text-center">Drag and drop or browse</p>
              <p className="text-sm text-center">Upload an image of the plant or use your camera to capture a live image for detection.</p>
              <button className="h-10 px-4 bg-[#ecf0ea] text-sm font-bold rounded-full">Upload Image</button>
            </div>
          </div>

          <div className="px-4 py-3">
            <button className="h-10 px-4 bg-[#ecf0ea] text-sm font-bold rounded-full">Use Camera</button>
          </div>

          <h2 className="text-[22px] font-bold px-4 pt-5 pb-3">Detection Results</h2>
          <p className="text-base px-4 pb-3">Results will be displayed here after processing the image. This includes the detected issue, confidence score, annotated image, and treatment options.</p>

          <h2 className="text-[22px] font-bold px-4 pt-5 pb-3">Treatment Options</h2>
          <div className="px-4 gap-8 flex border-b border-[#d9e1d6]">
            {['Organic Solutions', 'Chemical Recommendations'].map((item, idx) => (
              <a
                key={item}
                href="#"
                className={`flex flex-col items-center pb-[13px] pt-4 border-b-[3px] text-sm font-bold ${
                  idx === 0 ? 'border-[#c5e0b7] text-[#131811]' : 'border-transparent text-[#6d8560]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-base px-4 pt-1 pb-3">Explore organic solutions for managing the detected issue, including natural remedies and sustainable practices.</p>

          <div className="px-4 gap-8 flex border-b border-[#d9e1d6]">
            {['Preventive Measures', 'Share Report'].map((item, idx) => (
              <a
                key={item}
                href="#"
                className={`flex flex-col items-center pb-[13px] pt-4 border-b-[3px] text-sm font-bold ${
                  idx === 0 ? 'border-[#c5e0b7] text-[#131811]' : 'border-transparent text-[#6d8560]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-base px-4 pt-1 pb-3">Learn about preventive measures to protect your plants from future issues and maintain their health.</p>

          <div className="px-4 py-3">
            <button className="h-10 px-4 bg-[#ecf0ea] text-sm font-bold rounded-full">Download Report</button>
          </div>
        </div>
      </main>
    </div>
  );
}
