module.exports = function PreviousCultivated(req, res) {
    console.log("PreviousCultivated endpoint called");
    
    try {
        const { farmerId, year, season } = req.query;
        
        // In real implementation, this would fetch from database
        const cultivationHistory = getPreviousCultivationData(farmerId, year, season);
        
        res.status(200).json({
            success: true,
            data: {
                farmerId,
                year: year || new Date().getFullYear(),
                season,
                cultivationHistory
            },
            message: "Previous cultivation data retrieved successfully"
        });
    } catch (error) {
        console.error("Error in PreviousCultivated:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve cultivation history",
            error: error.message
        });
    }
};