module.exports = function SearchCrops(req, res) {
    console.log("SearchCrops endpoint called");
    
    try {
        const { query, filters } = req.body;
        
        if (!query) {
            return res.status(400).json({
                success: false,
                message: "Search query is required"
            });
        }
        
        const searchResults = searchCropsDatabase(query, filters);
        
        res.status(200).json({
            success: true,
            data: {
                query,
                results: searchResults,
                totalResults: searchResults.length
            },
            message: "Search completed successfully"
        });
    } catch (error) {
        console.error("Error in SearchCrops:", error);
        res.status(500).json({
            success: false,
            message: "Search failed",
            error: error.message
        });
    }
};