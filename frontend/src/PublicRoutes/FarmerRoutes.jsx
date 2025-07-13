import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DiseaseDetection from '../Panels/Farmer/DiseasePrediction/DiseaseDetection'
const FarmerRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/dieseasedetection' element={<DiseaseDetection/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default FarmerRoutes
