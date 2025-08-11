import React from "react";
import SustainabilityDashboard from "../../../Components/Sustainablity/SustainablityDashboard";
import KeyMetrics from "../../../Components/Sustainablity/KeyMetrics";
import Achievements from "../../../Components/Sustainablity/Achievements";
import WeeklyTips from "../../../Components/Sustainablity/WeeklyTips";
import DataInput from "../../../Components/Sustainablity/DataInput";
const SustainableDashboard = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f9fcf8] overflow-x-hidden w-full"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="flex-1 w-full">
        <div className="flex flex-1 justify-center py-5 w-full">
          <div className="flex flex-col w-full flex-1 max-w-7xl">
            <div className="p-4">
              <p className="text-[32px] font-bold leading-tight">
                Sustainability Dashboard
              </p>
            </div>

            {/* Sustainability Score Card */}
            <SustainabilityDashboard />

            {/* Key Metrics */}
            <KeyMetrics />

            {/* Achievements */}
            <Achievements />

            {/* Weekly Tips */}
            <WeeklyTips />

            {/* Data Input */}
            <DataInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableDashboard;