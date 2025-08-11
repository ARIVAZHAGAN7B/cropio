import React, { useState } from "react";
import SubsidyTabs from "../../../Components/Subsidies/SubsidyTabs";
import Section from "../../../Components/Subsidies/Section";
import Header from "../../../Components/Subsidies/Header";

export default function InsuranceLoans() {
  const [activeTab, setActiveTab] = useState("Crop Insurance");

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f9fcf8] overflow-x-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      <div className="flex h-full flex-col grow">
        <Header />
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#121b0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Government Schemes & Financial Aid
              </p>
            </div>
            <SubsidyTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "Crop Insurance" && (
              <Section
                title="Crop Insurance Schemes"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" /></svg>}
                description="Pradhan Mantri Fasal Bima Yojana (PMFBY)"
                extraInfo="Eligibility: All farmers growing notified crops in notified areas. Coverage: Covers yield losses due to natural calamities, pests, and diseases."
                buttons={["Learn More"]}
              />
            )}

            {activeTab === "Loans" && (
              <Section
                title="Loans"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z" /></svg>}
                description="Kisan Credit Card (KCC)"
                extraInfo="Crop Type: Rice, Wheat, Maize. Interest Rate: 7% per annum (subject to change)."
                buttons={["Apply Now"]}
              />
            )}

            {activeTab === "Subsidies" && (
              <Section
                title="Subsidies"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M198.1,62.6a76,76,0,0,0-140.2,0A72.27,72.27,0,0,0,16,127.8C15.89,166.62,47.36,199,86.14,200A71.68,71.68,0,0,0,120,192.49V232a8,8,0,0,0,16,0V192.49A71.45,71.45,0,0,0,168,200l1.86,0c38.78-1,70.25-33.36,70.14-72.18A72.26,72.26,0,0,0,198.1,62.6ZM169.45,184a55.61,55.61,0,0,1-32.52-9.4q-.47-.3-.93-.57V132.94l43.58-21.78a8,8,0,1,0-7.16-14.32L136,115.06V88a8,8,0,0,0-16,0v51.06L83.58,120.84a8,8,0,1,0-7.16,14.32L120,156.94V174q-.47.27-.93.57A55.7,55.7,0,0,1,86.55,184a56,56,0,0,1-22-106.86,15.9,15.9,0,0,0,8.05-8.33,60,60,0,0,1,110.7,0,15.9,15.9,0,0,0,8.05,8.33,56,56,0,0,1-22,106.86Z" /></svg>}
                description="Government Subsidies for Sustainable Agriculture"
                extraInfo="Scheme: National Mission on Sustainable Agriculture (NMSA). Eligibility: Farmers adopting sustainable practices."
                buttons={["Check Eligibility", "Download Resources"]}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
