import React from "react";

export default function SmartPurchase() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fafbf9] overflow-x-hidden"
      style={{ fontFamily: `Lexend, "Noto Sans", sans-serif` }}
    >
      <div className="flex h-full grow flex-col px-40 py-5">
        <div className="flex flex-col max-w-[960px] flex-1 mx-auto">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#131811] tracking-light text-[32px] font-bold leading-tight">
                Smart Purchase Recommendations
              </p>
              <p className="text-[#6d8560] text-sm font-normal leading-normal">
                Based on your location and market trends, we recommend the
                following crops for optimal returns.
              </p>
            </div>
          </div>

          <h3 className="text-[#131811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            AI Insights
          </h3>
          <div className="flex overflow-y-auto scrollbar-hide">
            <div className="flex items-stretch p-4 gap-3">
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADsrC4x1R0QHEEmCM7PGb69zLW6pH1zYWZ7H0Tu6XBwkI7Iy3-UUEPYlUAotUynUY1vbQLojev_YeOvDdEj3cdyQfx_y39-mIgPXUj51YWAmv9dp1Mxq8CODTYGoaya4unFmEh9FBCk4Yhxfvdy58ACTZb-76q0cuCLZ_Czg7XOiRkVRtkEF71L5GCidS678vxa75OiBa9rGv9FsiNQU51xKrTXzvlxfOAgwrynW0RnSd2G9_HSSVYD37DAt6VzpMblcdpuer6O74")',
                  }}
                ></div>
                <div>
                  <p className="text-[#131811] text-base font-medium leading-normal">
                    Top Crops to Invest In
                  </p>
                  <p className="text-[#6d8560] text-sm font-normal leading-normal">
                    Wheat shows promising returns due to increased demand and
                    favorable weather conditions.
                  </p>
                </div>
              </div>

              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCe5736pfdcT6Dbqms7qjdltdakBOv39mXV0rj2ge8KbGTyDiLpWK7AXARwl2F7RhDfBWelyBTPD5keuUFGqGyGlImk07YJQ5GTH_XQP8iQ3aoEryETPYQ1-j0hpSG3w6G-eChJug4haEbA6OOdYuMIF5KvaiwTiIBt2HclDq-P8XkwGC6PRDf6UVtSMdPGdGQfXzd9FlEzlTMy9QBbZIgbCcjtXpcdnrQbe3VSjU-45tdt362RS0aB8aalff1SMjbmqRD6ulG4ULI")',
                  }}
                ></div>
                <div>
                  <p className="text-[#131811] text-base font-medium leading-normal">
                    High-Demand Crops Nearby
                  </p>
                  <p className="text-[#6d8560] text-sm font-normal leading-normal">
                    Corn is in high demand in your region, with prices expected
                    to rise by 15% in the next quarter.
                  </p>
                </div>
              </div>

              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGNhbSZBMlu4mPCkKdboL3Lvhb54v64jTe1hF-BH7HaHdGDw68qsYsmWVzm3rmoINGt7iRelSXwQbguXJOoG5J-RoPNXp5_vBCBc1ln626z6ScHeq47popP3ri7D6WHGLGC5h6prsAoKvIt7vk2OKO1ppALrtAtcCK34tfUyci6h-Ubqf9PK-LQLM-Xt0Jz4YxSlmsRUudUKunoUak24zRZk3L5vO7XD0fVP5BEe05zIY5NiI5WgjQBcdS278Q86KfvggOA5eLygA")',
                  }}
                ></div>
                <div>
                  <p className="text-[#131811] text-base font-medium leading-normal">
                    Low-Risk Options
                  </p>
                  <p className="text-[#6d8560] text-sm font-normal leading-normal">
                    Soybean offers a low-risk investment with stable prices and
                    consistent yields.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-[#131811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Crop Details
          </h3>

          <div className="pb-3">
            <div className="flex border-b border-[#d9e1d6] px-4 gap-8">
              <a
                className="flex flex-col items-center justify-center border-b-4 border-b-[#c5e0b7] text-[#131811] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#131811] text-sm font-bold leading-normal tracking-[0.015em]">
                  Table View
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-4 border-b-transparent text-[#6d8560] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#6d8560] text-sm font-bold leading-normal tracking-[0.015em]">
                  Map View
                </p>
              </a>
            </div>
          </div>

          <div className="px-4 py-3">
            <div className="flex overflow-hidden rounded-xl border border-[#d9e1d6] bg-[#fafbf9]">
              <table className="flex-1 w-full border-collapse">
                <thead>
                  <tr className="bg-[#fafbf9]">
                    <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal hidden max-[120px]:block max-[120px]:hidden">
                      Crop
                    </th>
                    <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal hidden max-[240px]:block max-[240px]:hidden">
                      Region
                    </th>
                    <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal hidden max-[360px]:block max-[360px]:hidden">
                      Avg. Price
                    </th>
                    <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal hidden max-[480px]:block max-[480px]:hidden">
                      Exp. Price
                    </th>
                    <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal hidden max-[600px]:block max-[600px]:hidden">
                      Current Stock
                    </th>
                    <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal hidden max-[720px]:block max-[720px]:hidden">
                      Farmers
                    </th>
                    <th className="px-4 py-3 text-left text-[#6d8560] w-60 text-sm font-medium leading-normal hidden max-[840px]:block max-[840px]:hidden"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      crop: "Wheat",
                      region: "Punjab",
                      avgPrice: "$250/ton",
                      expPrice: "$280/ton",
                      currentStock: "500 tons",
                      farmers: "1200",
                    },
                    {
                      crop: "Corn",
                      region: "Haryana",
                      avgPrice: "$200/ton",
                      expPrice: "$230/ton",
                      currentStock: "300 tons",
                      farmers: "800",
                    },
                    {
                      crop: "Soybean",
                      region: "Maharashtra",
                      avgPrice: "$300/ton",
                      expPrice: "$320/ton",
                      currentStock: "400 tons",
                      farmers: "1000",
                    },
                    {
                      crop: "Rice",
                      region: "Uttar Pradesh",
                      avgPrice: "$220/ton",
                      expPrice: "$240/ton",
                      currentStock: "600 tons",
                      farmers: "1500",
                    },
                    {
                      crop: "Cotton",
                      region: "Gujarat",
                      avgPrice: "$400/ton",
                      expPrice: "$450/ton",
                      currentStock: "200 tons",
                      farmers: "500",
                    },
                  ].map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-[#d9e1d6] h-[72px] text-sm font-normal leading-normal"
                    >
                      <td className="px-4 py-2 w-[400px] text-[#131811]">
                        {item.crop}
                      </td>
                      <td className="px-4 py-2 w-[400px] text-[#6d8560]">
                        {item.region}
                      </td>
                      <td className="px-4 py-2 w-[400px] text-[#6d8560]">
                        {item.avgPrice}
                      </td>
                      <td className="px-4 py-2 w-[400px] text-[#6d8560]">
                        {item.expPrice}
                      </td>
                      <td className="px-4 py-2 w-[400px] text-[#6d8560]">
                        {item.currentStock}
                      </td>
                      <td className="px-4 py-2 w-[400px] text-[#6d8560]">
                        {item.farmers}
                      </td>
                      <td className="px-4 py-2 w-60 text-[#6d8560] font-bold tracking-[0.015em]">
                        Connect to Sellers
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
