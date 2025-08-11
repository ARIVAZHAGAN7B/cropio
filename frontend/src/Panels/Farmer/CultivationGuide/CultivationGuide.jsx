import React, { useState, useEffect } from "react";

const CultivationGuide = () => {
  const [selectedCrop, setSelectedCrop] = useState('rice');
  const [cultivationData, setCultivationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentStage, setCurrentStage] = useState(null);

  useEffect(() => {
    fetchCultivationGuide(selectedCrop);
    fetchCurrentStage();
  }, [selectedCrop]);
  const baseUrl = import.meta.env.VITE_HOST;
  const fetchCultivationGuide = async (cropType) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/user/sustainablity/cultivationguide/cropguide?cropType=${cropType}&location=general`);
      const result = await response.json();
      
      if (result.success) {
        setCultivationData(result.data);
      } else {
        console.error('Failed to fetch cultivation guide:', result.message);
      }
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCurrentStage = async () => {
    try {
      // Mock planting date - in real app, this would come from user data
      const plantingDate = '2024-06-15';
      const response = await fetch(`${baseUrl}/user/sustainablity/cultivationguide/stageofcrop`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cropType: selectedCrop,
          plantingDate,
          currentStage: 'vegetative_growth'
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setCurrentStage(result.data);
      }
    } catch (error) {
      console.error('Failed to fetch current stage:', error);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    try {
      const response = await fetch(`${baseUrl}/user/sustainablity/cultivationguide/searchcrops`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: searchQuery,
          filters: {}
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setSearchResults(result.data.results);
      }
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const selectCropFromSearch = (crop) => {
    setSelectedCrop(crop.type);
    setSearchResults([]);
    setSearchQuery('');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafbf9]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mb-4"></div>
          <p className="text-[#6d8560]">Loading cultivation guide...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#fafbf9] p-6 font-[Lexend,Noto Sans,sans-serif]">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-6 relative">
          <label className="flex w-full h-12">
            <div className="flex items-center pl-4 bg-[#ecf0ea] rounded-l-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search crops (e.g., rice, wheat, corn)"
              className="w-full bg-[#ecf0ea] px-4 text-[#131811] placeholder-[#6d8560] rounded-r-xl focus:outline-none"
            />
          </label>
          
          {/* Search Results Dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-[#d9e1d6] rounded-xl mt-1 z-10 shadow-lg">
              {searchResults.map((crop) => (
                <div
                  key={crop.id}
                  onClick={() => selectCropFromSearch(crop)}
                  className="p-3 hover:bg-[#ecf0ea] cursor-pointer border-b border-[#d9e1d6] last:border-b-0"
                >
                  <div className="font-medium text-[#131811]">{crop.name}</div>
                  <div className="text-sm text-[#6d8560]">
                    {crop.variety} • {crop.duration} • Yield: {crop.yield}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Crop Selection Tabs */}
        <div className="mb-6 flex gap-2 flex-wrap">
          {['rice', 'wheat', 'corn'].map((crop) => (
            <button
              key={crop}
              onClick={() => setSelectedCrop(crop)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCrop === crop
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-[#131811] border border-[#d9e1d6] hover:bg-[#ecf0ea]'
              }`}
            >
              {crop.charAt(0).toUpperCase() + crop.slice(1)}
            </button>
          ))}
        </div>

        {/* Current Stage Information */}
        {currentStage && (
          <div className="mb-8 p-4 bg-white rounded-xl border border-[#d9e1d6]">
            <h3 className="text-lg font-bold text-[#131811] mb-2">Current Growth Stage</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-[#6d8560] mb-1">
                  <span className="font-medium">Stage:</span> {currentStage.description}
                </p>
                <p className="text-[#6d8560] mb-2">
                  <span className="font-medium">Days from planting:</span> {currentStage.daysFromPlanting}
                </p>
                {currentStage.nextStage && (
                  <p className="text-[#6d8560]">
                    <span className="font-medium">Next stage:</span> {currentStage.nextStage.description}
                  </p>
                )}
              </div>
              <div>
                <p className="font-medium text-[#131811] mb-2">Critical Actions:</p>
                <ul className="text-sm text-[#6d8560]">
                  {currentStage.criticalActions?.map((action, index) => (
                    <li key={index} className="mb-1">• {action}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Cultivation Guide Section */}
        <h2 className="text-[#131811] text-2xl font-bold pb-4">
          Cultivation Guide – {selectedCrop.charAt(0).toUpperCase() + selectedCrop.slice(1)}
        </h2>
        
        {cultivationData?.cultivationGuide ? (
          <div className="flex flex-col gap-3">
            {Object.entries(cultivationData.cultivationGuide).map(([key, section]) => (
              <details key={key} className="border border-[#d9e1d6] bg-white rounded-xl px-4 py-2">
                <summary className="cursor-pointer font-medium text-[#131811] py-2">
                  {section.title}
                </summary>
                <div className="text-[#6d8560] text-sm pb-4 space-y-2">
                  {section.content && (
                    <div>
                      <p className="font-medium mb-2">Instructions:</p>
                      <ul className="space-y-1">
                        {section.content.map((item, index) => (
                          <li key={index} className="ml-4">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.bestTime && (
                    <p><span className="font-medium">Best Time:</span> {section.bestTime}</p>
                  )}
                  
                  {section.seedRate && (
                    <p><span className="font-medium">Seed Rate:</span> {section.seedRate}</p>
                  )}
                  
                  {section.frequency && (
                    <p><span className="font-medium">Frequency:</span> {section.frequency}</p>
                  )}
                  
                  {section.organicOptions && (
                    <div>
                      <p className="font-medium mb-2">Organic Options:</p>
                      <ul className="space-y-1">
                        {section.organicOptions.map((option, index) => (
                          <li key={index} className="ml-4">• {option}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.breakdownCosts && (
                    <div>
                      <p className="font-medium mb-2">Cost Breakdown:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(section.breakdownCosts).map(([cost, amount]) => (
                          <div key={cost} className="flex justify-between">
                            <span className="font-medium">{amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 text-[#6d8560]">
            <p>No cultivation guide available for this crop.</p>
          </div>
        )}

        {/* Agricultural Calendar Section */}
        <h2 className="text-[#131811] text-2xl font-bold pt-10 pb-4">
          Agricultural Calendar – {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="bg-white rounded-xl p-4 border border-[#d9e1d6]">
          <div className="grid grid-cols-7 gap-1 text-center text-sm text-[#131811] font-medium mb-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <div key={d} className="h-10 flex items-center justify-center font-bold">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm text-[#131811]">
            {Array.from({ length: 31 }, (_, i) => {
              const isToday = i + 1 === new Date().getDate();
              return (
                <div
                  key={i + 1}
                  className={`h-10 flex items-center justify-center rounded-full transition-colors ${
                    isToday ? "bg-[#c5e0b7] font-bold" : "hover:bg-[#ecf0ea]"
                  }`}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
          
          {currentStage && (
            <div className="mt-4 pt-4 border-t border-[#d9e1d6]">
              <p className="text-[#6d8560] text-sm">
                <span className="font-medium">Current Stage:</span> {currentStage.description}
              </p>
              {currentStage.recommendations && currentStage.recommendations.length > 0 && (
                <div className="mt-2">
                  <p className="text-[#6d8560] text-sm font-medium">This Week's Recommendations:</p>
                  <ul className="text-xs text-[#6d8560] mt-1">
                    {currentStage.recommendations.slice(0, 3).map((rec, index) => (
                      <li key={index} className="ml-4 mt-1">• {rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CultivationGuide;