import React, { useState } from 'react';

const RecommendationForm = ({ onRecommendationsReceived }) => {
  const [formData, setFormData] = useState({
    location: '',
    soilType: '',
    previousCrops: '',
    waterAvailability: '',
    fertilizerAccess: '',
    marketDemandPreferences: '',
  });
  const baseUrl = import.meta.env.VITE_HOST;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${baseUrl}/user/sustainablity/croprecommendation/cropdata`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        onRecommendationsReceived(result.data.recommendations);
      } else {
        setError(result.message || 'Failed to get recommendations');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const soilTypeOptions = [
    { value: 'sandy', label: 'Sandy Soil' },
    { value: 'clay', label: 'Clay Soil' },
    { value: 'loamy', label: 'Loamy Soil' },
    { value: 'silt', label: 'Silt Soil' }
  ];

  const waterAvailabilityOptions = [
    { value: 'low', label: 'Low Water Availability' },
    { value: 'moderate', label: 'Moderate Water Availability' },
    { value: 'high', label: 'High Water Availability' }
  ];

  const previousCropsOptions = [
    { value: 'corn', label: 'Corn' },
    { value: 'wheat', label: 'Wheat' },
    { value: 'rice', label: 'Rice' },
    { value: 'soybeans', label: 'Soybeans' },
    { value: 'none', label: 'No Previous Crops' }
  ];

  const fertilizerOptions = [
    { value: 'organic', label: 'Organic Fertilizer' },
    { value: 'synthetic', label: 'Synthetic Fertilizer' },
    { value: 'both', label: 'Both Available' },
    { value: 'limited', label: 'Limited Access' }
  ];

  const marketPreferenceOptions = [
    { value: 'high_demand', label: 'High Market Demand' },
    { value: 'stable_price', label: 'Stable Pricing' },
    { value: 'export_potential', label: 'Export Potential' },
    { value: 'local_market', label: 'Local Market Focus' }
  ];

  return (
    <div>
      <div className="w-full max-w-[960px]">
        <div className="p-4">
          <h1 className="text-[32px] font-bold text-[#131811]">Crop Recommendation Form</h1>
          <p className="text-sm text-[#6d8560]">Provide details about your farm to receive AI-powered crop suggestions.</p>
          {error && (
            <div className="mt-2 p-3 bg-red-100 border border-red-300 rounded text-red-700">
              {error}
            </div>
          )}
        </div>

        <div className="px-4 py-3 max-w-[480px]">
          <label className="flex flex-col">
            <span className="text-base font-medium text-[#131811] pb-2">Location</span>
            <input
              value={formData.location}
              onChange={handleChange('location')}
              placeholder="Enter your farm's location"
              className="h-14 p-4 rounded-xl bg-[#ecf0ea] text-base text-[#131811] focus:outline-none"
            />
          </label>
        </div>

        {[
          { label: "Soil Type", field: "soilType", options: soilTypeOptions },
          { label: "Previous Crops", field: "previousCrops", options: previousCropsOptions },
          { label: "Water Availability", field: "waterAvailability", options: waterAvailabilityOptions },
          { label: "Fertilizer Access", field: "fertilizerAccess", options: fertilizerOptions },
          { label: "Market Demand Preferences", field: "marketDemandPreferences", options: marketPreferenceOptions },
        ].map(({ label, field, options }) => (
          <div key={label} className="px-4 py-3 max-w-[480px]">
            <label className="flex flex-col">
              <span className="text-base font-medium text-[#131811] pb-2">{label}</span>
              <select
                value={formData[field]}
                onChange={handleChange(field)}
                className="h-14 p-4 rounded-xl bg-[#ecf0ea] text-base text-[#131811] focus:outline-none"
              >
                <option value="">Select {label.toLowerCase()}</option>
                {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}

        <div className="px-4 py-3 flex justify-end">
          <button
            className={`px-6 py-3 rounded text-white font-medium ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 cursor-pointer'
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Getting Recommendations...' : 'Get Recommendations'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationForm;