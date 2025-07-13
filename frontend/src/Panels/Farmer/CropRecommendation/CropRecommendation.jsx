import React from "react";

const CropRecommendation = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fafbf9] overflow-x-hidden"
      style={{
        fontFamily: "Lexend, Noto Sans, sans-serif",
        "--select-button-svg":
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(109,133,96)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
      }}
    >
      <main className="px-40 py-5 flex justify-center">
        <div className="w-full max-w-[960px]">
          <div className="p-4">
            <h1 className="text-[32px] font-bold text-[#131811]">Crop Recommendation Form</h1>
            <p className="text-sm text-[#6d8560]">Provide details about your farm to receive AI-powered crop suggestions.</p>
          </div>

          {[
            { label: "Location", placeholder: "Enter your farm's location", type: "input" },
            { label: "Soil Type", type: "select" },
            { label: "Previous Crops", type: "select" },
            { label: "Water Availability", type: "select" },
            { label: "Fertilizer Access", type: "select" },
            { label: "Market Demand Preferences", type: "select" },
          ].map(({ label, placeholder, type }) => (
            <div key={label} className="px-4 py-3 max-w-[480px]">
              <label className="flex flex-col">
                <span className="text-base font-medium text-[#131811] pb-2">{label}</span>
                {type === "input" ? (
                  <input
                    placeholder={placeholder}
                    className="h-14 p-4 rounded-xl bg-[#ecf0ea] text-base text-[#131811] focus:outline-none"
                  />
                ) : (
                  <select className="h-14 p-4 rounded-xl bg-[#ecf0ea] text-base text-[#131811] focus:outline-none">
                    <option>Select {label.toLowerCase()}</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                )}
              </label>
            </div>
          ))}

          <div className="px-4 py-3 flex justify-end">
            <button className="rounded-full bg-[#c5e0b7] h-10 px-4 text-sm font-bold text-[#131811]">
              Get Recommendations
            </button>
          </div>

          <div className="px-4 pt-5 pb-3">
            <h2 className="text-[22px] font-bold text-[#131811]">Recommended Crops</h2>
          </div>

          <div className="flex gap-3 p-3 flex-wrap pr-4">
            {["Sort by Yield", "Sort by Water Needs"].map((label) => (
              <div
                key={label}
                className="h-8 px-4 flex items-center justify-center rounded-full bg-[#ecf0ea]"
              >
                <p className="text-sm font-medium text-[#131811]">{label}</p>
              </div>
            ))}
          </div>

          {[{
            title: "High-Yield Corn Variety",
            desc: "Variety: AgriCorn X500, Expected Yield: 150 bushels/acre, Reasons: High market demand, suitable for your soil type, and requires moderate water.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNPKrKP__tiZjmCUHiHoPsGZtgoPOP9o9or8bYPRuFSUhtVAmj_skplFBiTIeJ1c_LUv9i86szmfUBhTKzaCad62lW5JtM5xE5Wesg-vsmf7kB719trD6KqHv4xAQ75jzHUYn4T5YezexrEJSfmhXDNXp9NAdOalkQvCFW9w1YxbNnoBccNZBiz9jH7CTeM0ofgEhv_sWrQ7o9KCMIiNMz6dI4UB53clulMNdtTOnIlHLAvwW6_BRvyih_qw6EBGNZU3-twxEImcA"
          }, {
            title: "Drought-Resistant Wheat",
            desc: "Variety: AgriWheat D200, Expected Yield: 80 bushels/acre, Reasons: Excellent drought resistance, suitable for your soil type, and requires low water.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq8P_uONuVdFgukC7Y7K8y7qKiP431wKxP8JM_TtzUgjiArNToagMEpKlKl3VUIwMt6FxbdjFAvkzpBcmPyleM_uSmy2LVn2N8G2FurGsqiDyk_GP4hc22ZgMZdHSr4xu5X7SmWnVrcxN9gXrjpWJCkjLUrX8BLqxO4PwD18PzZChObv64TcstVqNqFE0zh6vOzcOCTMHnsDMwRpkYcbkWcDM4F_X3BJwX8cmuhP6lhjZRakdxzuDpbAP98ekMWaWMNApmQrFKD0o"
          }].map(({ title, desc, img }) => (
            <div key={title} className="p-4">
              <div className="flex gap-4 rounded-xl bg-[#fafbf9] p-4 shadow">
                <div className="flex flex-col gap-1 flex-[2]">
                  <p className="text-base font-bold text-[#131811]">{title}</p>
                  <p className="text-sm text-[#6d8560]">{desc}</p>
                </div>
                <div
                  className="aspect-video bg-cover bg-center rounded-xl flex-1"
                  style={{ backgroundImage: `url('${img}')` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CropRecommendation;