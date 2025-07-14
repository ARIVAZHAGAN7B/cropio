import React from "react";
import SustainablityDashboard from "../../../Components/Sustainablity/SustainablityDashboard";
const SustainableDashboard = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f9fcf8] overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full grow flex-col">

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <div className="p-4">
              <p className="text-[32px] font-bold leading-tight">Sustainability Dashboard</p>
            </div>

            {/* Sustainability Score Card */}
            <SustainablityDashboard/>
            
            {/* Key Metrics */}
            <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Key Metrics</h2>
            <div className="flex flex-wrap gap-4 p-4">
              {[
                { label: "Water Usage", value: 85 },
                { label: "Chemical Input", value: 70 },
                { label: "Crop Rotation", value: 90 },
                { label: "Soil Health", value: 75 },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col flex-1 min-w-[158px] gap-2 p-6 rounded-xl border border-[#d7e7d0]">
                  <p className="text-base font-medium">{item.label}</p>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
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

            {/* Weekly Tips */}
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

            {/* Data Input */}
            <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Data Input</h2>
            <div className="flex gap-3 flex-wrap px-4 pb-8">
              {[
                { label: "Manual Input", primary: true },
                { label: "Automated Feed", primary: false },
              ].map((btn, idx) => (
                <button
                  key={idx}
                  className={`h-10 px-4 rounded-full text-sm font-bold tracking-[0.015em] ${
                    btn.primary ? "bg-[#4ab714] text-[#121b0e]" : "bg-[#ebf3e7] text-[#121b0e]"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableDashboard;
