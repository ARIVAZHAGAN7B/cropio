module.exports = function CropData(req, res) {
    console.log("CropData endpoint called");
    
    try {
        // Sample crop data that would typically come from a database
        const cropData = [
            {
                id: 1,
                name: "Corn",
                varieties: [
                    {
                        name: "AgriCorn X500",
                        expectedYield: 150,
                        soilTypes: ["loamy", "clay"],
                        waterRequirement: "moderate",
                        growthPeriod: "90-120 days",
                        marketDemand: "high"
                    },
                    {
                        name: "AgriCorn D300",
                        expectedYield: 120,
                        soilTypes: ["sandy", "loamy"],
                        waterRequirement: "low",
                        growthPeriod: "85-110 days",
                        marketDemand: "medium"
                    }
                ]
            },
            {
                id: 2,
                name: "Wheat",
                varieties: [
                    {
                        name: "AgriWheat D200",
                        expectedYield: 80,
                        soilTypes: ["sandy", "loamy"],
                        waterRequirement: "low",
                        growthPeriod: "120-150 days",
                        marketDemand: "high"
                    },
                    {
                        name: "AgriWheat H400",
                        expectedYield: 100,
                        soilTypes: ["clay", "loamy"],
                        waterRequirement: "moderate",
                        growthPeriod: "110-140 days",
                        marketDemand: "medium"
                    }
                ]
            },
            {
                id: 3,
                name: "Rice",
                varieties: [
                    {
                        name: "AgriRice W100",
                        expectedYield: 200,
                        soilTypes: ["clay"],
                        waterRequirement: "high",
                        growthPeriod: "120-180 days",
                        marketDemand: "high"
                    }
                ]
            }
        ];

        res.status(200).json({
            success: true,
            data: cropData,
            message: "Crop data retrieved successfully"
        });
    } catch (error) {
        console.error("Error in CropData:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};