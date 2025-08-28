import React, { useState } from 'react';

const DiseaseInput = ({ onDetectionResult }) => {
  const [imageFile, setImageFile] = useState(null);
  const [cropType, setCropType] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const baseUrl = import.meta.env.VITE_FARMER_API_URL ;
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleDetection = async () => {
    if (!imageFile && !symptoms) {
      alert('Please upload an image or describe symptoms');
      return;
    }

    setLoading(true);
    
    try {
      // In a real implementation, you'd convert the image to base64 or use FormData
      const formData = new FormData();
      if (imageFile) formData.append('image', imageFile);
      formData.append('cropType', cropType);
      formData.append('symptoms', symptoms);

      const response = await fetch(`${baseUrl}/dieseased/inputdiesease`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (result.success) {
        onDetectionResult(result.data);
      } else {
        alert('Detection failed: ' + result.message);
      }
    } catch (error) {
      console.error('Detection error:', error);
      alert('Detection failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-[#131811] mb-4">Disease Detection</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#131811] mb-2">
            Upload Plant Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
          {previewUrl && (
            <img src={previewUrl} alt="Preview" className="mt-2 max-w-xs rounded-lg" />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#131811] mb-2">
            Crop Type
          </label>
          <select
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#ecf0ea] text-[#131811] focus:outline-none"
          >
            <option value="">Select crop type</option>
            <option value="corn">Corn</option>
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="tomato">Tomato</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#131811] mb-2">
            Describe Symptoms (Optional)
          </label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Describe visible symptoms like discoloration, spots, wilting, etc."
            className="w-full p-3 rounded-lg bg-[#ecf0ea] text-[#131811] focus:outline-none h-24 resize-none"
          />
        </div>

        <button
          onClick={handleDetection}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-medium ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {loading ? 'Analyzing...' : 'Detect Disease'}
        </button>
      </div>
    </div>
  );
};

export default DiseaseInput;