import React from 'react'

const WeeklyTips = () => {
  return (
    <div>
      <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Weekly Tips</h2>
            <div className="p-4">
              <div className="flex gap-4 rounded-xl bg-[#f9fcf8] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                  <p className="text-base font-bold">Optimize Irrigation</p>
                  <p className="text-[#67974e] text-sm">
                    Use drip irrigation to reduce water consumption by up to 30%.
                  </p>
                </div>
                <div
                  className="flex-1 bg-cover bg-center aspect-video rounded-xl"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABfS6qQvp2j8jJUi-7uMaQqNFcDqbxGP33-j6kX3JmgFKJZYrvoeuY8L5nKSf8HNlJaNm6ILpuC95LlL0Jvp3ASlVIxUT--wcyccvSOh-fnWTPHJ7d8wlbQ0i9AJEEWPAea-VYpGJQVnstJtLc0eaMzhYIUblmMEi09OG8KMc8qFuW2GVB7GPungZ6xY6JW_dHrGCT8TUjX82JHcOfIhQkDa0pg7v6ylP1XIIsKABKJkzPaJtcKQOpv42YQhm03CYZMQiONQoQue4')",
                  }}
                ></div>
              </div>
            </div>
    </div>
  )
}

export default WeeklyTips
