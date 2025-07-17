import React from 'react'

const Achievements = () => {
  return (
    <div>
      <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Achievements</h2>
            <div className="flex flex-wrap gap-3 px-4 pb-3">
              {["Water Saver", "Soil Champion"].map((badge, idx) => (
                <div
                  key={idx}
                  className="h-8 flex items-center justify-center gap-2 px-4 rounded-full bg-[#ebf3e7]"
                >
                  <p className="text-sm font-medium">{badge}</p>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Achievements
