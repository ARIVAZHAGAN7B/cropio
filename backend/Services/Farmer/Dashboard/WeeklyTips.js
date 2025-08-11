module.exports = function WeeklyTips(req, res) {
  console.log("WeeklyTips endpoint called");
  
  const mockWeeklyTips = [
    {
      id: 1,
      title: "Optimize Irrigation",
      description: "Use drip irrigation to reduce water consumption by up to 30%.",
      category: "water",
      difficulty: "medium",
      timeToImplement: "1-2 weeks",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABfS6qQvp2j8jJUi-7uMaQqNFcDqbxGP33-j6kX3JmgFKJZYrvoeuY8L5nKSf8HNlJaNm6ILpuC95LlL0Jvp3ASlVIxUT--wcyccvSOh-fnWTPHJ7d8wlbQ0i9AJEEWPAea-VYpGJQVnstJtLc0eaMzhYIUblmMEi09OG8KMc8qFuW2GVB7GPungZ6xY6JW_dHrGCT8TUjX82JHcOfIhQkDa0pg7v6ylP1XIIsKABKJkzPaJtcKQOpv42YQhm03CYZMQiONQoQue4",
      featured: true
    },
    {
      id: 2,
      title: "Companion Planting",
      description: "Plant nitrogen-fixing legumes alongside corn to improve soil fertility naturally.",
      category: "soil",
      difficulty: "easy",
      timeToImplement: "Next planting season",
      imageUrl: "",
      featured: false
    },
    {
      id: 3,
      title: "Integrated Pest Management",
      description: "Use beneficial insects to control pests and reduce chemical pesticide usage by 50%.",
      category: "pest",
      difficulty: "hard",
      timeToImplement: "2-3 months",
      imageUrl: "",
      featured: false
    }
  ];

  res.json({
    success: true,
    data: mockWeeklyTips,
    weekOf: "Week of January 8, 2024"
  });
};
