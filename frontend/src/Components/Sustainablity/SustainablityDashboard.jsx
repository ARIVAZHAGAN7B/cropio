import React, { useEffect, useState } from 'react';

const SustainabilityDashboard = () => {
  const [sustainabilityData, setSustainabilityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_HOST;;
  useEffect(() => {
    const fetchSustainabilityData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/user/sustainablity/sustainability-score`, {
          method: 'GET',
          headers: { 'Content-Type': "application/json" },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch sustainability data');
        }
        
        const apiData = await response.json();
        setSustainabilityData(apiData.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching sustainability data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSustainabilityData();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <div className="flex flex-col @xl:flex-row rounded-xl bg-[#f9fcf8] shadow-[0_0_4px_rgba(0,0,0,0.1)] p-4">
          <p className="text-sm text-gray-500">Loading sustainability score...</p>
        </div>
      </div>
    );
  }

  if (error || !sustainabilityData) {
    return (
      <div className="p-4">
        <div className="flex flex-col @xl:flex-row rounded-xl bg-[#f9fcf8] shadow-[0_0_4px_rgba(0,0,0,0.1)] p-4">
          <p className="text-sm text-red-500">Error: {error || 'No data available'}</p>
        </div>
      </div>
    );
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGradeBgColor = (grade) => {
    if (grade.includes('A')) return 'bg-green-100 text-green-800';
    if (grade.includes('B')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="p-4">
      <div className="flex flex-col @xl:flex-row rounded-xl bg-[#f9fcf8] shadow-[0_0_4px_rgba(0,0,0,0.1)]">
        <div
          className="w-full @xl:w-1/2 aspect-video bg-cover bg-center rounded-xl"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8ZPzz11_P_aPMxRyhqPPOB-4p3HmALUCrrEHdMJ64SBNv06yOieOMq2kveJqMA3hasW61cH2lbep3Xo-x4m-nAVuCIo4dwjC6Jjx2Adde03yTfh8zDrW3DZl68Fr8vIcROFXqMa-CIQttAucZOx2BGnA7JsawFrTAcBDNo0C3NSvFBlQ8608xHBKDh4rtddxOf30vvJOY5TeerLezDzZYV_RGbHuv_5Mkjq8sFLk35nzopf3Ngzo1aYoPCgFHYSs9OmjkTKMrO_Y')",
          }}
        ></div>
        <div className="flex flex-col gap-4 py-4 px-4 @xl:w-1/2">
          <div className="flex items-center gap-3">
            <p className="text-lg font-bold">Sustainability Score</p>
            <span className={`px-2 py-1 rounded-full text-sm font-bold ${getGradeBgColor(sustainabilityData.grade)}`}>
              {sustainabilityData.grade}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`text-4xl font-bold ${getScoreColor(sustainabilityData.overallScore)}`}>
              {sustainabilityData.overallScore}
            </div>
            <div className="flex flex-col text-sm">
              <span className="text-green-600">+{sustainabilityData.monthlyProgress}% this month</span>
              <span className="text-green-600">+{sustainabilityData.yearOverYear}% year over year</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-1">
            <p className="text-[#67974e] text-base">Overall sustainability score based on your farming practices.</p>
            <p className="text-[#67974e] text-sm">Updated {sustainabilityData.lastUpdated}</p>
          </div>
          
          <div className="flex justify-between items-end gap-3">
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">Quick Breakdown:</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Water Efficiency</span>
                  <span className={getScoreColor(sustainabilityData.breakdown.waterEfficiency)}>
                    {sustainabilityData.breakdown.waterEfficiency}%
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Soil Health</span>
                  <span className={getScoreColor(sustainabilityData.breakdown.soilHealth)}>
                    {sustainabilityData.breakdown.soilHealth}%
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityDashboard;