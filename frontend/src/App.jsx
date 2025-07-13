import React from 'react'
import ChatbotWidget from "./Shared/Chatbot/ChatbotWidget"
import Home from './Pages/Home'
import DiesaseDetection from './Panels/Farmer/DiseasePrediction/DiseaseDetection'
import CropRecommendation from './Panels/Farmer/CropRecommendation'
import CultivationGuide from './Panels/Farmer/CultivationGuide'
import SustainableTips from './Panels/Farmer/SustainableTips'
import SoilHealthMonitor from './Panels/Farmer/SoilHealthMonitor'
import YieldEstimator from './Panels/Farmer/YieldEstimator'
import InsuranceLoans from './Panels/Farmer/InsuranceLoans'
import CommunityForum from './Panels/Farmer/CommunityForum'
import MarketplaceAccess from './Panels/Farmer/Market/MarketplaceAccess'
import DemandSupplyDashboard from './Panels/Dealer/DemandSupplyDashboard'
import SmartPurchase from './Panels/Dealer/SmartPurchase'
import PriceForecast from './Panels/Dealer/PriceForecast'
import FarmerConnect from './Panels/Dealer/FarmerConnect'
import LogisticsIntegration from './Panels/Dealer/LogisticsIntegration'
import LanguageSelection from './Pages/LanguageSelection'
import SustainableDashboard from './Panels/Farmer/SustainableDashboard'
import News from './Panels/Dealer/News'
const App = () => {
  return (
    <div>
      <LanguageSelection/>
      <Home/> 
      <SustainableDashboard/>
      <News/>
    </div>
  )
}

export default App
