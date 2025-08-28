import DealerDashboard from '../Pages/DealerDashboard'
import FarmerConnect from "../Panels/Dealer/FarmerConnect/FarmerConnect"
import PriceForecast from '../Panels/Dealer/PriceForecast/PriceForecast'
import SmartPurchase from '../Panels/Dealer/SmartPurchase/SmartPurchase'
import LogisticsIntegration from '../Panels/Dealer/LogisticsIntegration/LogisticsIntegration'
import InverntoryManager from '../Panels/Dealer/InventoryManager/InventoryManager'
import DemandSupplyDashboard from '../Panels/Dealer/DemandSupplyDashboard/DemandSupplyDashboard'
import { Routes,Route } from 'react-router-dom'

const DealerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DealerDashboard />} />
      <Route path="/farmer-connect" element={<FarmerConnect />} />
      <Route path="/price-forecast" element={<PriceForecast />} />
      <Route path="/smart-purchase" element={<SmartPurchase />} />
      <Route path="/logistics-integration" element={<LogisticsIntegration />} />
      <Route path="/inventory-management" element={<InverntoryManager />} />
      <Route path="/demand-supply-dashboard" element={<DemandSupplyDashboard />} />
    </Routes>
  )
}

export default DealerRoutes
