import React from 'react'

const DiseaseInput = () => {
  return (
    <div>
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
    </div>
  )
}

export default DiseaseInput
