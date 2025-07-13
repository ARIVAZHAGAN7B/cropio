import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="w-full px-6 py-6 border-b border-gray-200 bg-white flex items-center justify-between">
       <div className="flex items-center space-x-3">
  <div className="w-10 h-10 text-green-700">
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <rect x="30" y="36" width="4" height="20" fill="currentColor" />
      
      <circle cx="32" cy="20" r="6" fill="#D9C6A3"/>
      
      <path d="M30 17L34 17L32 22L36 22L30 29L32 23L28 23L30 17Z" fill="currentColor"/>

      <path d="M32 36 C20 30, 20 24, 32 18" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M32 36 C44 30, 44 24, 32 18" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </div>
  <h2 className="text-2xl font-bold text-green-700">Cropio</h2>
</div>


        <div className="flex items-center space-x-6">
          <nav className="flex space-x-4 text-sm font-medium">
            <a href="/dashboard" className="hover:text-green-600">Dashboard</a>
            <a href="/croprecommendation" className="hover:text-green-600">Recommendations</a>
             <a href="/dieseasedetection" className="hover:text-green-600">Disease Detection</a>
            <a href="/cultivationguide" className="hover:text-green-600">Cultivation Guides</a>
            <a href="/sustainable" className="hover:text-green-600">Sustainable Practices</a>
          </nav>
          <button className="text-xl">🔔</button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </header>

    </div>
  )
}

export default Navbar
