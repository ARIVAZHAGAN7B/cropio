import React, { useEffect, useState } from 'react';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_FARMER_API_URL ;
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/sustainablity/achievements`, {
          method: 'GET',
          headers: { 'Content-Type': "application/json" },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch achievements');
        }
        
        const apiData = await response.json();
        setAchievements(apiData.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching achievements:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAchievements();
  }, []);

  if (loading) {
    return (
      <div>
        <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Achievements</h2>
        <div className="flex flex-wrap gap-3 px-4 pb-3">
          <p className="text-sm text-gray-500">Loading achievements...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Achievements</h2>
        <div className="flex flex-wrap gap-3 px-4 pb-3">
          <p className="text-sm text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">
        Achievements ({achievements.length})
      </h2>
      <div className="flex flex-wrap gap-3 px-4 pb-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="h-8 flex items-center justify-center gap-2 px-4 rounded-full bg-[#ebf3e7] hover:bg-[#d4e7c5] transition-colors cursor-pointer"
            title={achievement.description}
          >
            <span className="text-sm">{achievement.icon}</span>
            <p className="text-sm font-medium">{achievement.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
