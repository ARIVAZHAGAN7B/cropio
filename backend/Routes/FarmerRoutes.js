const express = require("express");
const router = express.Router();

const CommunityFeed = require("../Services/Farmer/CommunityFeed/CommunityFeed");
const CommunityPost = require("../Services/Farmer/CommunityFeed/CommunityPost");
const CropData = require("../Services/Farmer/CropRecommendation/CropData");
const RecommendedCrops = require("../Services/Farmer/CropRecommendation/RecommendedCrop");
const CropGuide = require("../Services/Farmer/CultivationGuide/CropGuide")
const PreviousCultivated = require("../Services/Farmer/CultivationGuide/PreviousCultivated")
const SearchCrops = require("../Services/Farmer/CultivationGuide/SearchCrops");
const StageOfCrop = require("../Services/Farmer/CultivationGuide/StageOfCrop");
const Achivements = require("../Services/Farmer/Dashboard/Achivements");
const Keymetrics = require("../Services/Farmer/Dashboard/Keymetrics");
const SustainablityScore = require("../Services/Farmer/Dashboard/SustainablityScore");
const WeeklyData = require("../Services/Farmer/Dashboard/WeeklyData");
const WeeklyTips = require("../Services/Farmer/Dashboard/WeeklyTips");
const DetectionResult = require("../Services/Farmer/DieseaseDetection/DetectionResult");
const InputDiesesed = require("../Services/Farmer/DieseaseDetection/InputDieseased");
const PreventiveMeasure = require("../Services/Farmer/DieseaseDetection/PreventiveMeasures");
const TreatmentOptions = require("../Services/Farmer/DieseaseDetection/TreatmentOptions");
const CropInsurances = require("../Services/Farmer/GovernmentSchemes/CropInsurances");
const Loans = require("../Services/Farmer/GovernmentSchemes/Loans");
const Subsidies = require("../Services/Farmer/GovernmentSchemes/Subsidies");
const MarketData = require("../Services/Farmer/MarketPlace/MarketData");
const MarketPost = require("../Services/Farmer/MarketPlace/MarketPost");
const MSPupdates = require("../Services/Farmer/News/MSPupdates");
const News = require("../Services/Farmer/News/News");
const Policies = require("../Services/Farmer/News/Policies");
const Schemes = require("../Services/Farmer/News/Schemes");
const SustainablePractices = require("../Services/Farmer/SustainalbeAgriculture/SustainablePractices");
const CropYieldInput = require("../Services/Farmer/YieldEstimation/CropYieldInput");
const EstimatedYield = require("../Services/Farmer/YieldEstimation/EstimatedYield");

//commmunity
router.get("/community/communityfeed", CommunityFeed);
router.post("/community/communitypost", CommunityPost);

// crop recommendation
router.post("/croprecommendation/cropdata",CropData);
router.get("/croprecommendation/recommendedcrops",RecommendedCrops);

///cultivation guide
router.post("/cultivationguide/cropguide",CropGuide);
router.get("/cultivationguide/previouscultivated",PreviousCultivated);
router.post("/cultivationguide/searchcrops",SearchCrops);
router.get("/cultivationguide/stageofcrop",StageOfCrop);

/// dashboard 
router.post("/dashboard/weeklydata",WeeklyData);
router.post("/dashboard/keymetrics",Keymetrics);
router.get("/dashboard/sustainablityscore",SustainablityScore);
router.get("/dashboard/achivements",Achivements);
router.get("/dashboard/weeklytips",WeeklyTips);

/// diesedsed
router.post("/dieseased/inputdieseased",InputDiesesed);
router.get("/diesease/detectionresult",DetectionResult);
router.get("/diesease/preventivemeasures",PreventiveMeasure);
router.get("/diesease/treatmentoptions",TreatmentOptions);

//Government Schemes
router.get("/governmentschemes/cropinsurances",CropInsurances);
router.get("/governmentschemes/loans",Loans);
router.get("/governmentschemes/subsidies",Subsidies);

// Market Place
router.get("/marketplace/marketdata",MarketData);
router.post("/marketplace/marketpost",MarketPost);

//News
router.get("/news/mspupdates",MSPupdates);
router.get("/news/news",News);
router.get("/news/polices",Policies);
router.get("news/schemes",Schemes);

//Sustainalbe Agriculture
router.get("/sustainableagriculture/sustainablepractices",SustainablePractices);

//Yield Estimation
router.post("/yieldestimation/cropyieldinput",CropYieldInput);
router.get("/yieldestimation/estimatedyield",EstimatedYield);

module.exports = router;
