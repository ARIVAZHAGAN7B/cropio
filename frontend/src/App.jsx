import React from 'react'
import ChatbotWidget from "./Shared/Chatbot/ChatbotWidget"
import Home from './Pages/Home'
import DiesaseDetection from './Panels/Farmer/DiseasePrediction/DiseaseDetection'
import CropRecommendation from './Panels/Farmer/CropRecommendation/CropRecommendation'
import CultivationGuide from './Panels/Farmer/CultivationGuide'
import SustainableTips from './Panels/Farmer/Sustainablity/SustainableTips'
import SoilHealthMonitor from './Panels/Farmer/SoilHealth/SoilHealthMonitor'
import YieldEstimator from './Panels/Farmer/YieldEstimation/YieldEstimator'
import InsuranceLoans from './Panels/Farmer/Subsidies/InsuranceLoans'
import CommunityForum from './Panels/Farmer/Community/CommunityForum'
import MarketplaceAccess from './Panels/Farmer/Market/MarketplaceAccess'
import DemandSupplyDashboard from './Panels/Dealer/DemandSupplyDashboard'
import SmartPurchase from './Panels/Dealer/SmartPurchase'
import PriceForecast from './Panels/Dealer/PriceForecast'
import FarmerConnect from './Panels/Dealer/FarmerConnect'
import LogisticsIntegration from './Panels/Dealer/LogisticsIntegration'
import LanguageSelection from './Pages/LanguageSelection'
import SustainableDashboard from './Panels/Farmer/Sustainablity/SustainableDashboard'
import News from './Panels/Dealer/News'
import LoginForm from './Pages/Login'
import RegisterForm from './Pages/Register'
import FarmerRoutes from './PublicRoutes/FarmerRoutes'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <FarmerRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
