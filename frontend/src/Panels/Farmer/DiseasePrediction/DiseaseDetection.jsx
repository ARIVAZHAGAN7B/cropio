import React from "react";
import DiseaseInput from "../../../Components/DiseaseDetection/DiseaseInput";
import DetecedDisease from "../../../Components/DiseaseDetection/DetecedDisease";
import TreatmentOptions from "../../../Components/DiseaseDetection/TreatmentOptions";
export default function DiseaseDetection() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fafbf9] overflow-x-hidden"
      style={{
        fontFamily: 'Lexend, "Noto Sans", sans-serif',
        ['--select-button-svg'.toString()]:
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(109,133,96)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
      }}
    >
      <main className="px-40 py-5 flex justify-center">
        <div className="flex flex-col max-w-[960px] w-full">
          <DiseaseInput/>
          <DetecedDisease/>
          <TreatmentOptions/>
        </div>
      </main>
    </div>
  );
}
