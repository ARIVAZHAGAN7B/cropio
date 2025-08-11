import React, { useState, useEffect } from 'react';

const CropRecommended = ({ recommendations: propRecommendations }) => {
  const [activeSort, setActiveSort] = useState("Sort by Yield");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_HOST;
  useEffect(() => {
    if (propRecommendations) {
      setRecommendations(propRecommendations);
    } else {
      fetchDefaultRecommendations();
    }
  }, [propRecommendations]);

  const fetchDefaultRecommendations = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/user/sustainablity/croprecommendation/recommendedcrops`);
      const result = await response.json();
      
      if (result.success) {
        // Transform crop data to recommendations format
        const defaultRecommendations = result.data.flatMap(crop =>
          crop.varieties.map(variety => ({
            title: `${crop.name} - ${variety.name}`,
            variety: variety.name,
            expectedYield: variety.expectedYield,
            yieldUnit: "bushels/acre",
            reasons: [
              `Expected yield: ${variety.expectedYield} bushels/acre`,
              `Water requirement: ${variety.waterRequirement}`,
              `Growth period: ${variety.growthPeriod}`,
              `Market demand: ${variety.marketDemand}`
            ],
            waterRequirement: variety.waterRequirement,
            marketDemand: variety.marketDemand,
            img: `https://images.unsplash.com/photo-${crop.name.toLowerCase() === 'corn' ? '1551836022-d5d88e9218df' : crop.name.toLowerCase() === 'wheat' ? '1574323347407-f5e1ad6d020b' : '1536304993881-ff6e9eefa2a6'}?w=400`
          }))
        );
        setRecommendations(defaultRecommendations.slice(0, 6));
      }
    } catch (error) {
      console.error('Failed to fetch default recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const sortRecommendations = (sortType) => {
    const sorted = [...recommendations].sort((a, b) => {
      if (sortType === "Sort by Yield") {
        return b.expectedYield - a.expectedYield;
      } else if (sortType === "Sort by Water Needs") {
        const waterOrder = { low: 1, moderate: 2, high: 3 };
        return waterOrder[a.waterRequirement] - waterOrder[b.waterRequirement];
      }
      return 0;
    });
    setRecommendations(sorted);
  };

  const handleSortChange = (sortType) => {
    setActiveSort(sortType);
    sortRecommendations(sortType);
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        <p className="mt-2 text-gray-600">Loading recommendations...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="px-4 pt-5 pb-3">
        <h2 className="text-[22px] font-bold text-[#131811]">Recommended Crops</h2>
        {recommendations.length > 0 && (
          <p className="text-sm text-[#6d8560] mt-1">
            Showing {recommendations.length} personalized recommendations
          </p>
        )}
      </div>

      {recommendations.length > 0 && (
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {["Sort by Yield", "Sort by Water Needs"].map((label) => (
            <button
              key={label}
              onClick={() => handleSortChange(label)}
              className={`px-4 py-2 rounded cursor-pointer text-white transition-colors ${
                activeSort === label ? "bg-green-700" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {recommendations.length === 0 ? (
        <div className="p-8 text-center text-gray-600">
          <p>No recommendations available. Please fill out the recommendation form to get personalized suggestions.</p>
        </div>
      ) : (
        recommendations.map((crop, index) => (
          <div key={`${crop.title}-${index}`} className="p-4">
            <div className="flex gap-4 rounded-xl bg-[#fafbf9] p-4 shadow hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-2 flex-[2]">
                <p className="text-base font-bold text-[#131811]">{crop.title}</p>
                <div className="text-sm text-[#6d8560]">
                  <p className="font-medium">Variety: {crop.variety}</p>
                  <p>Expected Yield: {crop.expectedYield} {crop.yieldUnit}</p>
                  <div className="mt-2">
                    <p className="font-medium">Key Benefits:</p>
                    <ul className="list-disc list-inside mt-1">
                      {crop.reasons.map((reason, idx) => (
                        <li key={idx}>{reason}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="aspect-video bg-cover bg-center rounded-xl flex-1 min-h-[120px]"
                style={{ backgroundImage: `url('${crop.img}')` }}
              ></div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CropRecommended;