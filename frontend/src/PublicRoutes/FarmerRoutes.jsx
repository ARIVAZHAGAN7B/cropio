import React from 'react'
import {Routes,Route, Router } from 'react-router-dom'
import FarmerDashboard from '../Pages/FarmerDashboard'
import DiseaseDetection from '../Panels/Farmer/DiseasePrediction/DiseaseDetection'
import CropRecommendation from '../Panels/Farmer/CropRecommendation/CropRecommendation'
import CultivationGuide from '../Panels/Farmer/CultivationGuide/CultivationGuide'
import SustainableTips from '../Panels/Farmer/Sustainablity/SustainableTips'
import SustainableDashboard from '../Panels/Farmer/Sustainablity/SustainableDashboard'
import News from '../Panels/Farmer/News/News'
import MarketplaceAccess from '../Panels/Farmer/Market/MarketplaceAccess'
import InsuranceLoans from '../Panels/Farmer/Subsidies/InsuranceLoans'
import YieldEstimator from '../Panels/Farmer/YieldEstimation/YieldEstimator'
import CommunityForum from '../Panels/Farmer/Community/CommunityForum'
import ForgotPassword from '../Pages/ForgotPassword'
import LoginForm from '../Pages/Login'
const FarmerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FarmerDashboard/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/dieseasedetection' element={<DiseaseDetection/>}/>
        <Route path='/croprecommendation' element={<CropRecommendation/>}/>
        <Route path='/cultivationguide' element={<CultivationGuide/>}/>
        <Route path='/sustainable' element={<SustainableTips/>}/>
        <Route path='/dashboard' element={<SustainableDashboard/>}/>
        <Route path='/services/news' element={<News/>}/>
        <Route path='/services/market' element={<MarketplaceAccess/>}/>
        <Route path='/services/subsidy' element={<InsuranceLoans/>}/>
        <Route path='/services/yield-estimation' element={<YieldEstimator/>}/>
        <Route path='/services/community' element={<CommunityForum/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
      </Routes>
    </div>
  )
}

export default FarmerRoutes
