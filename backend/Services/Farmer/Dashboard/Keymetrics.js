module.exports = function Keymetrics(req, res) {
  console.log("Keymetrics endpoint called");
  
  const mockKeymetrics = {
    waterusage: 1250, // liters per hectare
    chemicalinput: 15, // kg per hectare
    croprotation: 85, // percentage score
    soilhealth: 92, // percentage score
    lastUpdated: new Date().toISOString(),
    trends: {
      waterusage: -12, // percentage change from last month
      chemicalinput: -35,
      croprotation: +8,
      soilhealth: +5
    }
  };

  res.json(mockKeymetrics);
};