module.exports = function CropGuide(req, res) {
    console.log("CropGuide endpoint called");
    
    try {
        const { cropType, stage, location } = req.query;
        
        // Get cultivation guide based on crop type
        const cultivationData = getCultivationGuide(cropType || 'rice');
        
        res.status(200).json({
            success: true,
            data: {
                crop: cropType || 'rice',
                cultivationGuide: cultivationData,
                currentStage: stage || 'vegetative_growth',
                location: location || 'general'
            },
            message: "Cultivation guide retrieved successfully"
        });
    } catch (error) {
        console.error("Error in CropGuide:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve cultivation guide",
            error: error.message
        });
    }
};