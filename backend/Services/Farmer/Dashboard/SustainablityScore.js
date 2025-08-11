module.exports = function SustainabilityScore(req, res) {
  console.log("SustainabilityScore endpoint called");
  
  const mockSustainabilityData = {
    overallScore: 78,
    grade: "B+",
    breakdown: {
      waterEfficiency: 85,
      soilHealth: 92,
      chemicalReduction: 65,
      biodiversity: 70,
      energyUse: 75
    },
    recommendations: [
      "Consider implementing drip irrigation system",
      "Increase cover crop usage",
      "Explore renewable energy options"
    ],
    lastUpdated: "2 days ago",
    monthlyProgress: +12,
    yearOverYear: +23
  };

  res.json({
    success: true,
    data: mockSustainabilityData
  });
};