import React, { useState } from 'react';

const RecommendationForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    soilType: '',
    previousCrops: '',
    waterAvailability: '',
    fertilizerAccess: '',
    marketDemandPreferences: '',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div>
      <div className="w-full max-w-[960px]">
        <div className="p-4">
          <h1 className="text-[32px] font-bold text-[#131811]">Crop Recommendation Form</h1>
          <p className="text-sm text-[#6d8560]">Provide details about your farm to receive AI-powered crop suggestions.</p>
        </div>

        {[
          { label: "Location", placeholder: "Enter your farm's location", type: "input", field: "location" },
          { label: "Soil Type", type: "select", field: "soilType" },
          { label: "Previous Crops", type: "select", field: "previousCrops" },
          { label: "Water Availability", type: "select", field: "waterAvailability" },
          { label: "Fertilizer Access", type: "select", field: "fertilizerAccess" },
          { label: "Market Demand Preferences", type: "select", field: "marketDemandPreferences" },
        ].map(({ label, placeholder, type, field }) => (
          <div key={label} className="px-4 py-3 max-w-[480px]">
            <label className="flex flex-col">
              <span className="text-base font-medium text-[#131811] pb-2">{label}</span>
              {type === "input" ? (
                <input
                  value={formData[field]}
                  onChange={handleChange(field)}
                  placeholder={placeholder}
                  className="h-14 p-4 rounded-xl bg-[#ecf0ea] text-base text-[#131811] focus:outline-none"
                />
              ) : (
                <select
                  value={formData[field]}
                  onChange={handleChange(field)}
                  className="h-14 p-4 rounded-xl bg-[#ecf0ea] text-base text-[#131811] focus:outline-none"
                >
                  <option value="">Select {label.toLowerCase()}</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </select>
              )}
            </label>
          </div>
        ))}

        <div className="px-4 py-3 flex justify-end">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
            onClick={() => console.log(formData)}
          >
            Get Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationForm;
