import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [showServices, setShowServices] = useState(false)
  const hideTimeoutRef = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(hideTimeoutRef.current)
    setShowServices(true)
  }

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowServices(false)
    }, 75) // 100 millisecond delay
  }

  return (
    <header className="w-full px-6 py-4 border-b border-gray-200 bg-white flex items-center justify-between shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <img src={logo} alt="Cropio Logo" className="w-10 h-10 rounded-xl object-cover" />
        <h2 className="text-2xl font-bold text-green-700">Cropio</h2>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-5 text-sm font-medium text-gray-700 relative">
          <Link to="/dashboard" className="hover:text-green-600 transition-colors">Dashboard</Link>
          <Link to="/croprecommendation" className="hover:text-green-600 transition-colors">Recommendations</Link>
          <Link to="/dieseasedetection" className="hover:text-green-600 transition-colors">Disease Detection</Link>
          <Link to="/cultivationguide" className="hover:text-green-600 transition-colors">Cultivation Guides</Link>
          <Link to="/sustainable" className="hover:text-green-600 transition-colors">Sustainable Practices</Link>

          {/* Services Dropdown Wrapper */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="hover:text-green-600 transition-colors flex items-center gap-1 cursor-pointer"
              onClick={() => setShowServices((prev) => !prev)}
            >
              Services <span className="text-xs">▼</span>
            </button>

            {showServices && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-64 z-50 p-2 grid grid-cols-2 gap-1">
                <Link to="/services/news" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">News</Link>
                <Link to="/services/community" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Community</Link>
                <Link to="/services/market" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Market</Link>
                <Link to="/services/subsidy" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Govt. Schemes</Link>
                <Link to="/services/yield-estimation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded col-span-2 text-center">Yield Estimation</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Notification and Profile */}
        <button className="text-xl hover:text-green-600 transition-colors">🔔</button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  )
}

export default Navbar
