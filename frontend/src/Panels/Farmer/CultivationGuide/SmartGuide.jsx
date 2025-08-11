import React, { useState, useEffect } from 'react';

const SmartGuide = () => {
  const [activeTab, setActiveTab] = useState('calendar');
  const [cultivationHistory, setCultivationHistory] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_HOST;
  useEffect(() => {
    if (activeTab === 'history') {
      fetchCultivationHistory();
    } else if (activeTab === 'recommendations') {
      fetchSmartRecommendations();
    }
  }, [activeTab]);

  const fetchCultivationHistory = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/user/sustainablity/cultivationguide/previouscultivated?farmerId=123&year=2023`);
      const result = await response.json();
      
      if (result.success) {
        setCultivationHistory(result.data.cultivationHistory);
      }
    } catch (error) {
      console.error('Failed to fetch cultivation history:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSmartRecommendations = async () => {
    setLoading(true);
    try {
      // Fetch recommendations based on current conditions
      const response = await fetch(`${baseUrl}/user/sustainablity/croprecommendation/cropdata`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'General',
          soilType: 'loamy',
          waterAvailability: 'moderate',
          previousCrops: 'rice',
          fertilizerAccess: 'organic',
          marketDemandPreferences: 'high_demand'
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setRecommendations(result.data.recommendations);
      }
    } catch (error) {
      console.error('Failed to fetch recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'calendar', label: 'Smart Calendar', icon: '📅' },
    { id: 'history', label: 'Cultivation History', icon: '📈' },
    { id: 'recommendations', label: 'AI Recommendations', icon: '🤖' },
    { id: 'analytics', label: 'Farm Analytics', icon: '📊' }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#fafbf9] p-6 font-[Lexend,Noto Sans,sans-serif]">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#131811] mb-6">Smart Farming Guide</h1>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 bg-white p-2 rounded-xl border border-[#d9e1d6]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white'
                  : 'text-[#131811] hover:bg-[#ecf0ea]'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl border border-[#d9e1d6] p-6">
          {activeTab === 'calendar' && (
            <div>
              <h2 className="text-xl font-bold text-[#131811] mb-4">Smart Agricultural Calendar</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-2">This Week</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Apply nitrogen fertilizer to rice</li>
                    <li>• Monitor for pest activity</li>
                    <li>• Check irrigation systems</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-2">Next Week</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Begin land preparation for next crop</li>
                    <li>• Schedule soil testing</li>
                    <li>• Plan seed procurement</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="font-bold text-orange-800 mb-2">Seasonal Tasks</h3>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Harvest preparation for rice</li>
                    <li>• Equipment maintenance</li>
                    <li>• Storage facility preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div>
              <h2 className="text-xl font-bold text-[#131811] mb-4">Cultivation History</h2>
              {loading ? (
                <div className="text-center p-8">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
                </div>
              ) : cultivationHistory.length > 0 ? (
                <div className="space-y-4">
                  {cultivationHistory.map((record) => (
                    <div key={record.id} className="p-4 border border-[#d9e1d6] rounded-lg">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-bold text-[#131811] mb-2">{record.crop} - {record.variety}</h3>
                          <div className="text-sm text-[#6d8560] space-y-1">
                            <p><span className="font-medium">Area:</span> {record.area}</p>
                            <p><span className="font-medium">Planting:</span> {new Date(record.plantingDate).toLocaleDateString()}</p>
                            <p><span className="font-medium">Harvest:</span> {new Date(record.harvestDate).toLocaleDateString()}</p>
                            <p><span className="font-medium">Yield:</span> {record.yield}</p>
                            <p><span className="font-medium">Profit:</span> <span className="text-green-600 font-medium">{record.profit}</span></p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-[#131811] mb-2">Challenges & Lessons</h4>
                          <div className="text-sm text-[#6d8560]">
                            <p className="font-medium mb-1">Challenges:</p>
                            <ul className="mb-2">
                              {record.challenges.map((challenge, index) => (
                                <li key={index} className="ml-4">• {challenge}</li>
                              ))}
                            </ul>
                            <p className="font-medium mb-1">Lessons Learned:</p>
                            <ul>
                              {record.lessons.map((lesson, index) => (
                                <li key={index} className="ml-4">• {lesson}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[#6d8560] p-8">No cultivation history available.</p>
              )}
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div>
              <h2 className="text-xl font-bold text-[#131811] mb-4">AI-Powered Recommendations</h2>
              {loading ? (
                <div className="text-center p-8">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
                </div>
              ) : recommendations.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-4 border border-[#d9e1d6] rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-[#131811] mb-2">{rec.title}</h3>
                      <div className="text-sm text-[#6d8560] space-y-1 mb-3">
                        <p><span className="font-medium">Variety:</span> {rec.variety}</p>
                        <p><span className="font-medium">Expected Yield:</span> {rec.expectedYield} {rec.yieldUnit}</p>
                        <p><span className="font-medium">Water Requirement:</span> {rec.waterRequirement}</p>
                      </div>
                      <div>
                        <p className="font-medium text-[#131811] mb-1">Key Benefits:</p>
                        <ul className="text-sm text-[#6d8560]">
                          {rec.reasons.slice(0, 3).map((reason, idx) => (
                            <li key={idx} className="ml-4">• {reason}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[#6d8560] p-8">No recommendations available.</p>
              )}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-xl font-bold text-[#131811] mb-4">Farm Analytics</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">2.5 ha</div>
                  <div className="text-sm text-green-700">Total Farm Area</div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">45 q/ha</div>
                  <div className="text-sm text-blue-700">Average Yield</div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">₹35,000</div>
                  <div className="text-sm text-yellow-700">Avg. Profit/Season</div>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
                  <div className="text-sm text-purple-700">Success Rate</div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-[#131811] mb-2">Performance Insights</h3>
                <ul className="text-sm text-[#6d8560] space-y-1">
                  <li>• Your rice yield is 15% above regional average</li>
                  <li>• Consider expanding rice cultivation area next season</li>
                  <li>• Wheat performance has been consistent over 3 seasons</li>
                  <li>• Organic farming practices showing positive ROI</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartGuide;