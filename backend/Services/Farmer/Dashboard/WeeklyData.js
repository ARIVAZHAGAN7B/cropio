module.exports = function WeeklyData(req, res) {
  console.log("WeeklyData endpoint called");
  
  const mockWeeklyData = {
    weekOf: "2024-01-08",
    summary: {
      totalRainfall: 25.4, // mm
      avgTemperature: 22.5, // celsius
      sunlightHours: 48.5,
      humidity: 65 // percentage
    },
    activities: [
      {
        date: "2024-01-08",
        activity: "Soil pH testing",
        area: "Field A",
        result: "6.8 pH - Optimal"
      },
      {
        date: "2024-01-09",
        activity: "Irrigation system maintenance",
        area: "All fields",
        result: "15% efficiency improvement"
      },
      {
        date: "2024-01-10",
        activity: "Organic fertilizer application",
        area: "Field B",
        result: "2 tons applied"
      }
    ],
    alerts: [
      {
        type: "weather",
        message: "Heavy rain expected in 3 days",
        priority: "medium"
      }
    ]
  };

  res.json({
    success: true,
    data: mockWeeklyData
  });
};