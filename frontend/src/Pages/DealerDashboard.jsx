import React from "react";

const DealerDashboard = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f9fcf8] overflow-x-hidden font-[Lexend,Noto_Sans,sans-serif]">
      <div className="layout-container flex grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#f9fcf8] p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <h1 className="text-[#121b0e] text-base font-medium">AgriTrade</h1>
                  <p className="text-[#67974e] text-sm">Dealer Dashboard</p>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Dashboard", icon: "House", filled: true },
                    { label: "Orders", icon: "Truck" },
                    { label: "Products", icon: "Package" },
                    { label: "Customers", icon: "Users" },
                    { label: "Settings", icon: "Gear" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl ${
                        item.filled ? "bg-[#ebf3e7]" : ""
                      }`}
                    >
                      <div className="text-[#121b0e]">
                        <i className={`ph-${item.icon.toLowerCase()} ph-fill text-xl`} />
                      </div>
                      <p className="text-[#121b0e] text-sm font-medium">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#121b0e] text-[32px] font-bold min-w-72">Dashboard</p>
            </div>
            <h2 className="text-[#121b0e] text-[22px] font-bold tracking-[-0.015em] px-4 pb-3 pt-5">
              Crop Demand & Oversupply
            </h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              {[{
                title: "Crop Demand",
                value: "1200 tons",
                trend: "+15%",
                trendColor: "#07881f",
                crops: [
                  { name: "Wheat", value: 80 },
                  { name: "Corn", value: 80 },
                  { name: "Soybeans", value: 60 },
                  { name: "Rice", value: 20 },
                  { name: "Barley", value: 70 }
                ]
              }, {
                title: "Crop Oversupply",
                value: "300 tons",
                trend: "-10%",
                trendColor: "#e71f08",
                crops: [
                  { name: "Tomatoes", value: 30 },
                  { name: "Lettuce", value: 60 },
                  { name: "Cucumbers", value: 70 },
                  { name: "Peppers", value: 20 },
                  { name: "Spinach", value: 80 }
                ]
              }].map((section, i) => (
                <div key={i} className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d7e7d0] p-6">
                  <p className="text-[#121b0e] text-base font-medium">{section.title}</p>
                  <p className="text-[#121b0e] text-[32px] font-bold truncate">{section.value}</p>
                  <div className="flex gap-1">
                    <p className="text-[#67974e] text-base">Last 30 Days</p>
                    <p className="text-base font-medium" style={{ color: section.trendColor }}>{section.trend}</p>
                  </div>
                  <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                    {section.crops.map((crop, idx) => (
                      <React.Fragment key={idx}>
                        <p className="text-[#67974e] text-[13px] font-bold tracking-[0.015em]">{crop.name}</p>
                        <div className="h-full flex-1">
                          <div
                            className="border-[#67974e] bg-[#ebf3e7] border-r-2 h-full"
                            style={{ width: `${crop.value}%` }}
                          />
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerDashboard;
