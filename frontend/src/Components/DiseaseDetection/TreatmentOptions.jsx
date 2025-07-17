import React from 'react'

const TreatmentOptions = () => {
  return (
    <div>
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
  )
}

export default TreatmentOptions
