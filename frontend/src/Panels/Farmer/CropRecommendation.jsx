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
      <header className="flex items-center justify-between border-b border-[#ecf0ea] px-10 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#131811]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">AgriWise</h2>
          </div>
          <nav className="flex gap-9">
            {['Dashboard', 'Crops', 'Marketplace', 'Support'].map((link) => (
              <a key={link} href="#" className="text-sm font-medium text-[#131811]">
                {link}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <label className="flex min-w-40 h-10 max-w-64">
            <div className="flex w-full items-center rounded-xl h-full bg-[#ecf0ea]">
              <div className="text-[#6d8560] pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
              <input
                placeholder="Search"
                className="flex-1 bg-[#ecf0ea] px-4 text-base text-[#131811] focus:outline-none"
              />
            </div>
          </label>
          <div
            className="size-10 bg-center bg-no-repeat bg-cover rounded-full"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtOYNBQUqgcpFMTZnIOSWPscFZ4SnJY2B1BAdzl3HeE-FVFyLN673YPXXULSUEkGUZoHrO_qtBjhFCHOjDPeVLZ2UH1eK2O86uWIzZAuvzb7fBuL5B0mZ8vxB3NYMxTwmTOAYd70H43myvISXTHHaoMU7dEG3kSVbKnbqh-cK6EGPmlTZsiVod9G9ZJScARzxmJrXkiVFRrzqcfeCugLP50a4m0KeMUlgcoRJZ4_ATxsArHFJk0mKqYS0OMx5YYiWMvFKRH8AQ118')",
            }}
          ></div>
        </div>
      </header>

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