module.exports = function Achievements(req, res) {
  console.log("Achievements endpoint called");
  
  const mockAchievements = [
    {
      id: 1,
      name: "Water Saver",
      description: "Reduced water usage by 25% this month",
      icon: "💧",
      earnedDate: "2024-01-15",
      category: "water"
    },
    {
      id: 2,
      name: "Soil Champion",
      description: "Maintained optimal soil health for 6 months",
      icon: "🌱",
      earnedDate: "2024-01-10",
      category: "soil"
    },
    {
      id: 3,
      name: "Organic Pioneer",
      description: "Zero chemical inputs for 3 months",
      icon: "🌿",
      earnedDate: "2024-01-05",
      category: "organic"
    },
    {
      id: 4,
      name: "Rotation Master",
      description: "Perfect crop rotation cycle completed",
      icon: "🔄",
      earnedDate: "2023-12-20",
      category: "rotation"
    }
  ];

  res.json({
    success: true,
    data: mockAchievements,
    totalAchievements: mockAchievements.length
  });
};