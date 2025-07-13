import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <header className="w-full px-6 py-4 border-b border-gray-200 bg-white flex items-center justify-between shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <img src={logo} alt="Cropio Logo" className="w-10 h-10 rounded-xl object-cover" />
        <h2 className="text-2xl font-bold text-green-700">Cropio</h2>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-5 text-sm font-medium text-gray-700">
          <Link to="/dashboard" className="hover:text-green-600 transition-colors">Dashboard</Link>
          <Link to="/croprecommendation" className="hover:text-green-600 transition-colors">Recommendations</Link>
          <Link to="/dieseasedetection" className="hover:text-green-600 transition-colors">Disease Detection</Link>
          <Link to="/cultivationguide" className="hover:text-green-600 transition-colors">Cultivation Guides</Link>
          <Link to="/sustainable" className="hover:text-green-600 transition-colors">Sustainable Practices</Link>
        </nav>

        {/* Notification and Profile */}
        <button className="text-xl hover:text-green-600 transition-colors">🔔</button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  )
}

export default Navbar
