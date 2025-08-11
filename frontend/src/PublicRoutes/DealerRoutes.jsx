import DealerDashboard from '../Pages/DealerDashboard'
import FarmerConnect from "../Panels/Dealer/FarmerConnect"
import PriceForecast from '../Panels/Dealer/PriceForecast'
import SmartPurchase from '../Panels/Dealer/SmartPurchase'
import News from "../Panels/Dealer/News"
import LogisticsIntegration from '../Panels/Dealer/LogisticsIntegration'
import InverntoryManager from '../Panels/Dealer/InventoryManager'
import { Routes,Route } from 'react-router-dom'

const DealerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DealerDashboard />} />
      <Route path="/farmer-connect" element={<FarmerConnect />} />
      <Route path="/price-forecast" element={<PriceForecast />} />
      <Route path="/smart-purchase" element={<SmartPurchase />} />
      <Route path="/news" element={<News />} />
      <Route path="/logistics-integration" element={<LogisticsIntegration />} />
      <Route path="/inventory-management" element={<InverntoryManager />} />
    </Routes>
  )
}

export default DealerRoutes
