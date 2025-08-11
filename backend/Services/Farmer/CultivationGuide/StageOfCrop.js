module.exports = function StageOfCrop(req, res) {
    console.log("StageOfCrop endpoint called");
    
    try {
        const { cropType, currentStage, plantingDate } = req.body;
        
        if (!cropType || !plantingDate) {
            return res.status(400).json({
                success: false,
                message: "Crop type and planting date are required"
            });
        }
        
        const stageInfo = determineCurrentStage(cropType, plantingDate, currentStage);
        
        res.status(200).json({
            success: true,
            data: stageInfo,
            message: "Crop stage information retrieved successfully"
        });
    } catch (error) {
        console.error("Error in StageOfCrop:", error);
        res.status(500).json({
            success: false,
            message: "Failed to determine crop stage",
            error: error.message
        });
    }
};