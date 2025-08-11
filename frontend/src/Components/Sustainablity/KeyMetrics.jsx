import React, { useEffect, useState } from 'react';
const KeyMetrics = () => {
  const baseUrl = import.meta.env.VITE_HOST;
  const [data, setData] = useState({
    waterusage: 0,
    chemicalinput: 0,
    croprotation: 0,
    soilhealth: 0,
    trends: {}
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/user/sustainablity/keymetrics`, {
          method: 'GET',
          headers: { 'Content-Type': "application/json" },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch key metrics');
        }
        
        const apiData = await response.json();
        setData(apiData);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching key metrics:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const formatValue = (key, value) => {
    switch (key) {
      case 'waterusage':
        return `${value} L/ha`;
      case 'chemicalinput':
        return `${value} kg/ha`;
      case 'croprotation':
      case 'soilhealth':
        return `${value}%`;
      default:
        return value;
    }
  };

  const getTrendIcon = (trend) => {
    if (!trend) return '';
    if (trend > 0) return '📈';
    if (trend < 0) return '📉';
    return '➡️';
  };

  const getTrendColor = (key, trend) => {
    if (!trend) return '';
    // For water usage and chemical input, negative trends are good
    if (key === 'waterusage' || key === 'chemicalinput') {
      return trend < 0 ? 'text-green-600' : 'text-red-600';
    }
    // For crop rotation and soil health, positive trends are good
    return trend > 0 ? 'text-green-600' : 'text-red-600';
  };

  if (loading) {
    return (
      <div>
        <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Key Metrics</h2>
        <div className="flex flex-wrap gap-4 p-4">
          <p className="text-sm text-gray-500">Loading metrics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Key Metrics</h2>
        <div className="flex flex-wrap gap-4 p-4">
          <p className="text-sm text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Key Metrics</h2>
      <div className="flex flex-wrap gap-4 p-4">
        {[
          { key: 'waterusage', label: "Water Usage", value: data.waterusage },
          { key: 'chemicalinput', label: "Chemical Input", value: data.chemicalinput },
          { key: 'croprotation', label: "Crop Rotation", value: data.croprotation },
          { key: 'soilhealth', label: "Soil Health", value: data.soilhealth },
        ].map((item) => (
          <div key={item.key} className="flex flex-col flex-1 min-w-[158px] gap-2 p-6 rounded-xl border border-[#d7e7d0] bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <p className="text-base font-medium">{item.label}</p>
              {data.trends && data.trends[item.key] && (
                <span className="text-sm" title={`${data.trends[item.key] > 0 ? '+' : ''}${data.trends[item.key]}% from last month`}>
                  {getTrendIcon(data.trends[item.key])}
                </span>
              )}
            </div>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold">{formatValue(item.key, item.value)}</p>
              {data.trends && data.trends[item.key] && (
                <span className={`text-xs ${getTrendColor(item.key, data.trends[item.key])}`}>
                  {data.trends[item.key] > 0 ? '+' : ''}{data.trends[item.key]}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyMetrics;