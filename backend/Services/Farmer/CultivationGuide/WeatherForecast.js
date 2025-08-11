module.exports.WeatherForecast = function(req, res) {
    console.log("WeatherForecast endpoint called");
    
    try {
        const { location, days = 7 } = req.query;
        
        if (!location) {
            return res.status(400).json({
                success: false,
                message: "Location is required for weather forecast"
            });
        }
        
        // In real implementation, this would call external weather API
        const weatherData = generateWeatherForecast(location, parseInt(days));
        
        res.status(200).json({
            success: true,
            data: {
                location,
                forecast: weatherData,
                agriculturalAdvice: generateAgricultureAdvice(weatherData)
            },
            message: "Weather forecast retrieved successfully"
        });
    } catch (error) {
        console.error("Error in WeatherForecast:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve weather forecast",
            error: error.message
        });
    }
};

// Helper Functions

function getCultivationGuide(cropType) {
    const cultivationGuides = {
        rice: {
            sowingInstructions: {
                title: "Sowing Instructions",
                content: [
                    "Prepare seedbed by plowing and leveling the field",
                    "Soak seeds in water for 24 hours before sowing",
                    "Maintain 2-3 inches of standing water during seedling stage",
                    "Transplant seedlings when they are 25-30 days old",
                    "Maintain 15cm spacing between rows and 10cm between plants"
                ],
                bestTime: "June to July for Kharif season",
                seedRate: "20-25 kg per hectare"
            },
            irrigationSchedule: {
                title: "Irrigation Schedule",
                content: [
                    "Maintain 2-5cm standing water during vegetative stage",
                    "Drain field during flowering for better pollination",
                    "Resume irrigation after flowering",
                    "Stop irrigation 2 weeks before harvest"
                ],
                frequency: "Check water level daily",
                criticalPeriods: ["Tillering stage", "Flowering stage", "Grain filling"]
            },
            fertilizerChart: {
                title: "Fertilizer Chart",
                content: [
                    "Nitrogen: 120 kg/ha (split into 3 doses)",
                    "Phosphorus: 60 kg/ha (full dose at transplanting)",
                    "Potassium: 40 kg/ha (half at transplanting, half at flowering)",
                    "Zinc: 25 kg ZnSO4 per hectare if deficient"
                ],
                organicOptions: [
                    "Well-decomposed farmyard manure: 10-12 tons per hectare",
                    "Vermicompost: 2-3 tons per hectare"
                ]
            },
            pestWeedControl: {
                title: "Pest and Weed Control",
                content: [
                    "Use certified disease-free seeds",
                    "Apply pre-emergence herbicide for weed control",
                    "Monitor for brown plant hopper and stem borer",
                    "Use integrated pest management practices"
                ],
                commonPests: ["Brown Plant Hopper", "Stem Borer", "Rice Blast"],
                organicControl: ["Neem oil", "Trichogramma cards", "Pheromone traps"]
            },
            harvestReadiness: {
                title: "Harvest Readiness",
                content: [
                    "Harvest when 80-85% of grains turn golden yellow",
                    "Moisture content should be 20-25%",
                    "Panicles bend downward due to grain weight",
                    "Harvest in early morning to avoid grain shattering"
                ],
                duration: "110-160 days depending on variety",
                signs: ["Golden color", "Bent panicles", "Hard grains"]
            },
            costYieldEstimate: {
                title: "Estimated Cost and Yield",
                content: [
                    "Expected yield: 40-60 quintals per hectare",
                    "Input cost: ₹25,000-35,000 per hectare",
                    "Net profit: ₹15,000-25,000 per hectare"
                ],
                breakdownCosts: {
                    seeds: "₹2,000",
                    fertilizers: "₹8,000", 
                    pesticides: "₹3,000",
                    labor: "₹12,000",
                    irrigation: "₹5,000",
                    machinery: "₹5,000"
                }
            }
        },
        wheat: {
            sowingInstructions: {
                title: "Sowing Instructions",
                content: [
                    "Prepare field with 2-3 plowings followed by planking",
                    "Sow seeds using seed drill or broadcasting method",
                    "Maintain row spacing of 20-22.5 cm",
                    "Sow at depth of 4-5 cm",
                    "Apply light irrigation after sowing"
                ],
                bestTime: "November to December",
                seedRate: "100-125 kg per hectare"
            },
            irrigationSchedule: {
                title: "Irrigation Schedule", 
                content: [
                    "Crown root initiation: 20-25 days after sowing",
                    "Tillering stage: 40-45 days after sowing",
                    "Jointing stage: 60-65 days after sowing",
                    "Flowering stage: 85-90 days after sowing",
                    "Milk stage: 100-105 days after sowing",
                    "Dough stage: 115-120 days after sowing"
                ],
                frequency: "6-8 irrigations depending on soil type"
            }
            // ... similar structure for other sections
        },
        corn: {
            // ... similar structure
        }
    };
    
    return cultivationGuides[cropType.toLowerCase()] || cultivationGuides.rice;
}

function determineCurrentStage(cropType, plantingDate, currentStage) {
    const plantDate = new Date(plantingDate);
    const currentDate = new Date();
    const daysFromPlanting = Math.floor((currentDate - plantDate) / (1000 * 60 * 60 * 24));
    
    const cropStages = {
        rice: [
            { stage: 'seedling', duration: [0, 30], description: 'Seedling establishment' },
            { stage: 'tillering', duration: [30, 60], description: 'Active tillering phase' },
            { stage: 'vegetative_growth', duration: [60, 90], description: 'Vegetative growth' },
            { stage: 'flowering', duration: [90, 110], description: 'Flowering and pollination' },
            { stage: 'grain_filling', duration: [110, 140], description: 'Grain development' },
            { stage: 'maturity', duration: [140, 160], description: 'Ready for harvest' }
        ],
        wheat: [
            { stage: 'germination', duration: [0, 15], description: 'Seed germination' },
            { stage: 'tillering', duration: [15, 45], description: 'Tillering stage' },
            { stage: 'jointing', duration: [45, 75], description: 'Stem elongation' },
            { stage: 'flowering', duration: [75, 95], description: 'Flowering stage' },
            { stage: 'grain_filling', duration: [95, 120], description: 'Grain development' },
            { stage: 'maturity', duration: [120, 140], description: 'Harvest ready' }
        ]
    };
    
    const stages = cropStages[cropType.toLowerCase()] || cropStages.rice;
    const currentStageInfo = stages.find(s => 
        daysFromPlanting >= s.duration[0] && daysFromPlanting <= s.duration[1]
    ) || stages[stages.length - 1];
    
    return {
        currentStage: currentStageInfo.stage,
        description: currentStageInfo.description,
        daysFromPlanting,
        nextStage: getNextStage(stages, currentStageInfo.stage),
        recommendations: getStageRecommendations(cropType, currentStageInfo.stage),
        criticalActions: getCriticalActions(cropType, currentStageInfo.stage)
    };
}

function getNextStage(stages, currentStage) {
    const currentIndex = stages.findIndex(s => s.stage === currentStage);
    return currentIndex < stages.length - 1 ? stages[currentIndex + 1] : null;
}

function getStageRecommendations(cropType, stage) {
    const recommendations = {
        rice: {
            seedling: ["Maintain proper water level", "Apply organic matter", "Monitor for pests"],
            tillering: ["Apply nitrogen fertilizer", "Maintain standing water", "Control weeds"],
            vegetative_growth: ["Monitor nutrient levels", "Control pests", "Manage water carefully"],
            flowering: ["Ensure adequate water", "Apply potassium", "Monitor for diseases"],
            grain_filling: ["Maintain water supply", "Protect from birds", "Monitor grain development"],
            maturity: ["Plan harvest", "Check grain moisture", "Prepare storage"]
        }
    };
    
    return recommendations[cropType]?.[stage] || [];
}

function getCriticalActions(cropType, stage) {
    const actions = {
        rice: {
            seedling: ["Transplant at right time", "Ensure proper spacing"],
            tillering: ["Apply first nitrogen dose", "Remove weeds"],
            vegetative_growth: ["Apply second nitrogen dose", "Monitor water levels"],
            flowering: ["Drain field during flowering", "Apply potassium fertilizer"],
            grain_filling: ["Resume irrigation", "Protect from pests"],
            maturity: ["Stop irrigation 2 weeks before harvest", "Plan harvest timing"]
        }
    };
    
    return actions[cropType]?.[stage] || [];
}

function searchCropsDatabase(query, filters = {}) {
    // Mock crop database
    const cropsDatabase = [
        {
            id: 1,
            name: "Basmati Rice",
            type: "rice",
            variety: "Pusa Basmati 1121",
            duration: "145-150 days",
            yield: "45-50 quintals/hectare",
            soilType: ["clay", "loamy"],
            waterRequirement: "high",
            season: "kharif",
            marketPrice: "₹3,500-4,000/quintal"
        },
        {
            id: 2,
            name: "Wheat HD-2967",
            type: "wheat",
            variety: "HD-2967",
            duration: "135-140 days",
            yield: "50-55 quintals/hectare",
            soilType: ["loamy", "sandy"],
            waterRequirement: "moderate",
            season: "rabi",
            marketPrice: "₹2,200-2,500/quintal"
        },
        {
            id: 3,
            name: "Hybrid Corn",
            type: "corn",
            variety: "NK-6240",
            duration: "95-100 days",
            yield: "80-90 quintals/hectare",
            soilType: ["loamy", "sandy"],
            waterRequirement: "moderate",
            season: "kharif",
            marketPrice: "₹1,800-2,000/quintal"
        }
    ];
    
    let results = cropsDatabase.filter(crop =>
        crop.name.toLowerCase().includes(query.toLowerCase()) ||
        crop.type.toLowerCase().includes(query.toLowerCase()) ||
        crop.variety.toLowerCase().includes(query.toLowerCase())
    );
    
    // Apply filters
    if (filters.soilType) {
        results = results.filter(crop => crop.soilType.includes(filters.soilType));
    }
    
    if (filters.season) {
        results = results.filter(crop => crop.season === filters.season);
    }
    
    if (filters.waterRequirement) {
        results = results.filter(crop => crop.waterRequirement === filters.waterRequirement);
    }
    
    return results;
}

function getPreviousCultivationData(farmerId, year, season) {
    // Mock cultivation history data
    return [
        {
            id: 1,
            crop: "Rice",
            variety: "IR-64",
            area: "2.5 hectares",
            plantingDate: "2023-06-15",
            harvestDate: "2023-11-20",
            yield: "42 quintals/hectare",
            totalYield: "105 quintals",
            profit: "₹45,000",
            challenges: ["Brown plant hopper attack", "Late monsoon"],
            lessons: ["Need better pest management", "Consider drought-resistant variety"]
        },
        {
            id: 2,
            crop: "Wheat",
            variety: "HD-2967",
            area: "1.8 hectares",
            plantingDate: "2022-11-25",
            harvestDate: "2023-04-10",
            yield: "48 quintals/hectare",
            totalYield: "86.4 quintals",
            profit: "₹38,000",
            challenges: ["Aphid infestation"],
            lessons: ["Early sowing gave better results"]
        }
    ];
}

function generateWeatherForecast(location, days) {
    // Mock weather data - in real implementation, call weather API
    const forecast = [];
    
    for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        
        forecast.push({
            date: date.toISOString().split('T')[0],
            temperature: {
                max: Math.floor(Math.random() * 10) + 25,
                min: Math.floor(Math.random() * 8) + 18
            },
            humidity: Math.floor(Math.random() * 30) + 60,
            rainfall: Math.random() > 0.7 ? Math.floor(Math.random() * 20) : 0,
            windSpeed: Math.floor(Math.random() * 15) + 5,
            conditions: getWeatherCondition(),
            uvIndex: Math.floor(Math.random() * 5) + 3
        });
    }
    
    return forecast;
}

function getWeatherCondition() {
    const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Thunderstorms'];
    return conditions[Math.floor(Math.random() * conditions.length)];
}

function generateAgricultureAdvice(weatherData) {
    const advice = [];
    
    // Check for rain in forecast
    const rainyDays = weatherData.filter(day => day.rainfall > 0).length;
    if (rainyDays >= 3) {
        advice.push("Heavy rainfall expected. Ensure proper drainage in fields.");
        advice.push("Delay pesticide application until weather clears.");
    }
    
    // Check for high temperatures
    const hotDays = weatherData.filter(day => day.temperature.max > 35).length;
    if (hotDays >= 2) {
        advice.push("High temperatures expected. Increase irrigation frequency.");
        advice.push("Consider afternoon irrigation to cool crops.");
    }
    
    // Check for low humidity
    const dryDays = weatherData.filter(day => day.humidity < 50).length;
    if (dryDays >= 2) {
        advice.push("Low humidity conditions. Monitor crops for stress.");
    }
    
    return advice.length > 0 ? advice : ["Weather conditions are favorable for farming activities."];
}