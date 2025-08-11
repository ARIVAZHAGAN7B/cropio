import React, { useEffect, useState } from 'react';

const WeeklyTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_HOST;
  useEffect(() => {
    const fetchTips = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/user/sustainablity/weekly-tips`, {
          method: 'GET',
          headers: { 'Content-Type': "application/json" },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch weekly tips');
        }
        
        const apiData = await response.json();
        setTips(apiData.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching weekly tips:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTips();
  }, []);

  if (loading) {
    return (
      <div>
        <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Weekly Tips</h2>
        <div className="p-4">
          <p className="text-sm text-gray-500">Loading tips...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Weekly Tips</h2>
        <div className="p-4">
          <p className="text-sm text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  const featuredTip = tips.find(tip => tip.featured) || tips[0];
  const otherTips = tips.filter(tip => !tip.featured || tip.id !== featuredTip?.id);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Weekly Tips</h2>
      
      {featuredTip && (
        <div className="p-4">
          <div className="flex gap-4 rounded-xl bg-[#f9fcf8] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-2 flex-[2_2_0px]">
              <div className="flex items-center gap-2">
                <p className="text-base font-bold">{featuredTip.title}</p>
                <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(featuredTip.difficulty)}`}>
                  {featuredTip.difficulty}
                </span>
              </div>
              <p className="text-[#67974e] text-sm">{featuredTip.description}</p>
              <p className="text-xs text-gray-500">⏱️ {featuredTip.timeToImplement}</p>
            </div>
            <div
              className="flex-1 bg-cover bg-center aspect-video rounded-xl min-h-[80px]"
              style={{
                backgroundImage: featuredTip.imageUrl 
                  ? `url('${featuredTip.imageUrl}')` 
                  : "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABfS6qQvp2j8jJUi-7uMaQqNFcDqbxGP33-j6kX3JmgFKJZYrvoeuY8L5nKSf8HNlJaNm6ILpuC95LlL0Jvp3ASlVIxUT--wcyccvSOh-fnWTPHJ7d8wlbQ0i9AJEEWPAea-VYpGJQVnstJtLc0eaMzhYIUblmMEi09OG8KMc8qFuW2GVB7GPungZ6xY6JW_dHrGCT8TUjX82JHcOfIhQkDa0pg7v6ylP1XIIsKABKJkzPaJtcKQOpv42YQhm03CYZMQiONQoQue4')",
              }}
            ></div>
          </div>
        </div>
      )}

      {otherTips.length > 0 && (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-3">More Tips</h3>
          <div className="space-y-3">
            {otherTips.map((tip) => (
              <div key={tip.id} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#d7e7d0] hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium">{tip.title}</p>
                    <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(tip.difficulty)}`}>
                      {tip.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                  <p className="text-xs text-gray-500 mt-1">⏱️ {tip.timeToImplement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyTips;