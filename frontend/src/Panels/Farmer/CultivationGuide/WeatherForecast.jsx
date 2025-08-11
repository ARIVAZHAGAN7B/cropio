import React, { useState, useEffect } from 'react';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Delhi');
  const [loading, setLoading] = useState(false);
  const [agriculturalAdvice, setAgriculturalAdvice] = useState([]);
  const baseUrl = import.meta.env.VITE_HOST;
  useEffect(() => {
    fetchWeatherForecast();
  }, []);

  const fetchWeatherForecast = async (loc = location) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/weather-forecast?location=${loc}&days=7`);
      const result = await response.json();
      
      if (result.success) {
        setWeatherData(result.data);
        setAgriculturalAdvice(result.data.agriculturalAdvice);
      } else {
        console.error('Failed to fetch weather data:', result.message);
      }
    } catch (error) {
      console.error('Weather API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationChange = (e) => {
    if (e.key === 'Enter') {
      fetchWeatherForecast(e.target.value);
    }
  };

  const getWeatherIcon = (condition) => {
    const icons = {
      'Sunny': '☀️',
      'Partly Cloudy': '⛅',
      'Cloudy': '☁️',
      'Rainy': '🌧️',
      'Thunderstorms': '⛈️'
    };
    return icons[condition] || '☀️';
  };

  const getRainfallColor = (rainfall) => {
    if (rainfall === 0) return 'text-gray-400';
    if (rainfall < 5) return 'text-blue-400';
    if (rainfall < 15) return 'text-blue-600';
    return 'text-blue-800';
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafbf9]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mb-4"></div>
          <p className="text-[#6d8560]">Loading weather forecast...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#fafbf9] p-6 font-[Lexend,Noto Sans,sans-serif]">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#131811] mb-4">Weather Forecast</h1>
          
          {/* Location Input */}
          <div className="flex gap-4 items-center mb-4">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={handleLocationChange}
              placeholder="Enter location"
              className="px-4 py-2 bg-white border border-[#d9e1d6] rounded-lg text-[#131811] focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={() => fetchWeatherForecast()}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Update Forecast
            </button>
          </div>

          {/* Agricultural Advice */}
          {agriculturalAdvice.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-yellow-800 mb-2">🌾 Agricultural Advisory</h3>
              <ul className="space-y-1">
                {agriculturalAdvice.map((advice, index) => (
                  <li key={index} className="text-yellow-700 text-sm">• {advice}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Weather Cards */}
        {weatherData?.forecast ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {weatherData.forecast.map((day, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border border-[#d9e1d6] hover:shadow-md transition-shadow"
              >
                <div className="text-center mb-3">
                  <div className="text-2xl mb-2">{getWeatherIcon(day.conditions)}</div>
                  <h3 className="font-bold text-[#131811] mb-1">
                    {index === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </h3>
                  <p className="text-sm text-[#6d8560]">{day.conditions}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6d8560]">Temperature</span>
                    <span className="text-sm font-medium text-[#131811]">
                      {day.temperature.max}°/{day.temperature.min}°C
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6d8560]">Humidity</span>
                    <span className="text-sm font-medium text-[#131811]">{day.humidity}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6d8560]">Rainfall</span>
                    <span className={`text-sm font-medium ${getRainfallColor(day.rainfall)}`}>
                      {day.rainfall}mm
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6d8560]">Wind Speed</span>
                    <span className="text-sm font-medium text-[#131811]">{day.windSpeed} km/h</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6d8560]">UV Index</span>
                    <span className={`text-sm font-medium ${day.uvIndex > 6 ? 'text-red-600' : 'text-green-600'}`}>
                      {day.uvIndex}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 text-[#6d8560]">
            <p>No weather data available. Please try again.</p>
          </div>
        )}

        {/* Weekly Summary */}
        {weatherData?.forecast && (
          <div className="mt-8 bg-white rounded-xl p-6 border border-[#d9e1d6]">
            <h3 className="text-xl font-bold text-[#131811] mb-4">Weekly Summary</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {Math.round(weatherData.forecast.reduce((acc, day) => acc + day.temperature.max, 0) / weatherData.forecast.length)}°C
                </div>
                <div className="text-sm text-[#6d8560]">Avg Max Temp</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {weatherData.forecast.reduce((acc, day) => acc + day.rainfall, 0)}mm
                </div>
                <div className="text-sm text-[#6d8560]">Total Rainfall</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {weatherData.forecast.filter(day => day.rainfall > 0).length}
                </div>
                <div className="text-sm text-[#6d8560]">Rainy Days</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;