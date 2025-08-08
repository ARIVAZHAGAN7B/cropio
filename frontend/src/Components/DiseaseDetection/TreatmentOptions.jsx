import React, { useState } from 'react';

const TreatmentOptions = () => {
  const [activeTreatmentTab, setActiveTreatmentTab] = useState(0);
  const [activeReportTab, setActiveReportTab] = useState(0);

  const treatmentTabs = ['Organic Solutions', 'Chemical Recommendations'];
  const reportTabs = ['Preventive Measures', 'Share Report'];

  return (
    <div>
      {/* Treatment Tabs */}
      <h2 className="text-[22px] font-bold px-4 pt-5 pb-3">Treatment Options</h2>
      <div className="px-4 gap-8 flex border-b border-[#d9e1d6]">
        {treatmentTabs.map((item, idx) => (
          <button
            key={item}
            onClick={() => setActiveTreatmentTab(idx)}
            className={`flex flex-col items-center pb-[13px] pt-4 border-b-[3px] text-sm font-bold cursor-pointer hover:text-[#131811]  ${
              activeTreatmentTab === idx
                ? 'border-[#c5e0b7] text-[#131811]'
                : 'border-transparent text-[#6d8560]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      {activeTreatmentTab === 0 && (
        <p className="text-base px-4 pt-1 pb-3">
          Explore organic solutions for managing the detected issue, including natural remedies and sustainable practices.
        </p>
      )}
      {activeTreatmentTab === 1 && (
        <p className="text-base px-4 pt-1 pb-3">
          Discover chemical recommendations for addressing the issue effectively while following safety guidelines.
        </p>
      )}

      {/* Report Tabs */}
      <div className="px-4 gap-8 flex border-b border-[#d9e1d6]">
        {reportTabs.map((item, idx) => (
          <button
            key={item}
            onClick={() => setActiveReportTab(idx)}
            className={`flex flex-col items-center pb-[13px] pt-4 border-b-[3px] text-sm font-bold cursor-pointer hover:text-[#131811] ${
              activeReportTab === idx
                ? 'border-[#c5e0b7] text-[#131811]'
                : 'border-transparent text-[#6d8560]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      {activeReportTab === 0 && (
        <p className="text-base px-4 pt-1 pb-3">
          Learn about preventive measures to protect your plants from future issues and maintain their health.
        </p>
      )}
      {activeReportTab === 1 && (
        <p className="text-base px-4 pt-1 pb-3">
          Share your detailed plant health report with others for advice or record-keeping.
        </p>
      )}

      {/* Download Button */}
      <div className="px-4 py-3">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default TreatmentOptions;
