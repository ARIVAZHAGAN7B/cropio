import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DiseaseDetection from '../Panels/Farmer/DiseasePrediction/DiseaseDetection'
import Home from '../Pages/Home'
import CropRecommendation from '../Panels/Farmer/CropRecommendation/CropRecommendation'
import CultivationGuide from '../Panels/Farmer/CultivationGuide'
import SustainableTips from '../Panels/Farmer/Sustainablity/SustainableTips'
import SustainableDashboard from '../Panels/Farmer/Sustainablity/SustainableDashboard'
const FarmerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dieseasedetection' element={<DiseaseDetection/>}/>
        <Route path='/croprecommendation' element={<CropRecommendation/>}/>
        <Route path='/cultivationguide' element={<CultivationGuide/>}/>
        <Route path='/sustainable' element={<SustainableTips/>}/>
        <Route path='/dashboard' element={<SustainableDashboard/>}/>
      </Routes>
    </div>
  )
}

export default FarmerRoutes
