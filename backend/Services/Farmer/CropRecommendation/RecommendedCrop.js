module.exports = function RecommendedCrop(req, res) {
    console.log("RecommendedCrop endpoint called");
    console.log("Request body:", req.body);
    
    try {
        const {
            location,
            soilType,
            previousCrops,
            waterAvailability,
            fertilizerAccess,
            marketDemandPreferences
        } = req.body;

        // Validate required fields
        if (!location || !soilType || !waterAvailability) {
            return res.status(400).json({
                success: false,
                message: "Location, soil type, and water availability are required"
            });
        }

        // AI-like recommendation logic (simplified)
        const recommendations = generateRecommendations({
            location,
            soilType,
            previousCrops,
            waterAvailability,
            fertilizerAccess,
            marketDemandPreferences
        });

        res.status(200).json({
            success: true,
            data: {
                recommendations,
                farmProfile: {
                    location,
                    soilType,
                    waterAvailability,
                    previousCrops
                }
            },
            message: "Crop recommendations generated successfully"
        });
    } catch (error) {
        console.error("Error in RecommendedCrop:", error);
        res.status(500).json({
            success: false,
            message: "Failed to generate recommendations",
            error: error.message
        });
    }
};

// Helper function for generating recommendations
function generateRecommendations(farmData) {
    const { soilType, waterAvailability, marketDemandPreferences } = farmData;
    
    const allCrops = [
        {
            id: 1,
            title: "High-Yield Corn Variety",
            variety: "AgriCorn X500",
            expectedYield: 150,
            yieldUnit: "bushels/acre",
            reasons: [
                "High market demand",
                "Suitable for your soil type",
                "Moderate water requirement matches availability"
            ],
            soilCompatibility: ["loamy", "clay"],
            waterRequirement: "moderate",
            marketDemand: "high",
            img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400"
        },
        {
            id: 2,
            title: "Drought-Resistant Wheat",
            variety: "AgriWheat D200", 
            expectedYield: 80,
            yieldUnit: "bushels/acre",
            reasons: [
                "Excellent drought resistance",
                "Suitable for your soil type",
                "Low water requirement"
            ],
            soilCompatibility: ["sandy", "loamy"],
            waterRequirement: "low",
            marketDemand: "high",
            img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400"
        },
        {
            id: 3,
            title: "Premium Rice Variety",
            variety: "AgriRice W100",
            expectedYield: 200,
            yieldUnit: "bushels/acre", 
            reasons: [
                "High yield potential",
                "Premium market value",
                "Suitable for clay soil"
            ],
            soilCompatibility: ["clay"],
            waterRequirement: "high",
            marketDemand: "high",
            img: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400"
        }
    ];

    // Filter crops based on soil type and water availability
    let suitableCrops = allCrops.filter(crop => {
        const soilMatch = crop.soilCompatibility.includes(soilType.toLowerCase());
        const waterMatch = matchesWaterRequirement(crop.waterRequirement, waterAvailability);
        return soilMatch && waterMatch;
    });

    // Sort by market demand and yield if specified
    if (marketDemandPreferences === "high_demand") {
        suitableCrops = suitableCrops.filter(crop => crop.marketDemand === "high");
    }

    // Sort by yield (default sorting)
    suitableCrops.sort((a, b) => b.expectedYield - a.expectedYield);

    return suitableCrops.slice(0, 5); // Return top 5 recommendations
}

function matchesWaterRequirement(cropWaterNeed, farmWaterAvailability) {
    const waterLevels = { low: 1, moderate: 2, high: 3 };
    return waterLevels[cropWaterNeed] <= waterLevels[farmWaterAvailability.toLowerCase()];
}

// DiseaseDetection.js - New controller for disease detection
module.exports.DiseaseDetection = function(req, res) {
    console.log("DiseaseDetection endpoint called");
    
    try {
        const { imageData, cropType, symptoms } = req.body;
        
        // Simulate AI disease detection (in real implementation, this would call ML model)
        const detectedDiseases = simulateDiseaseDection(cropType, symptoms);
        
        res.status(200).json({
            success: true,
            data: {
                detectedDiseases,
                confidence: 0.85,
                recommendations: generateTreatmentRecommendations(detectedDiseases)
            },
            message: "Disease detection completed"
        });
    } catch (error) {
        console.error("Error in DiseaseDetection:", error);
        res.status(500).json({
            success: false,
            message: "Disease detection failed",
            error: error.message
        });
    }
};

function simulateDiseaseDection(cropType, symptoms) {
    // Sample disease database
    const diseases = {
        corn: [
            {
                name: "Corn Leaf Blight",
                severity: "moderate",
                symptoms: ["brown spots", "leaf wilting"],
                treatment: "fungicide application"
            }
        ],
        wheat: [
            {
                name: "Wheat Rust",
                severity: "high", 
                symptoms: ["orange pustules", "leaf yellowing"],
                treatment: "resistant varieties and fungicide"
            }
        ]
    };
    
    return diseases[cropType?.toLowerCase()] || [];
}

function generateTreatmentRecommendations(diseases) {
    return diseases.map(disease => ({
        disease: disease.name,
        immediateActions: [
            "Isolate affected plants",
            "Apply recommended treatment",
            "Monitor spread"
        ],
        preventiveMeasures: [
            "Improve air circulation",
            "Reduce moisture",
            "Use resistant varieties"
        ],
        treatmentOptions: [
            {
                type: "Organic",
                method: "Neem oil application",
                frequency: "Weekly"
            },
            {
                type: "Chemical", 
                method: "Fungicide spray",
                frequency: "Bi-weekly"
            }
        ]
    }));
}