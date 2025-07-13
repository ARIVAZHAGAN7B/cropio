import React from "react";

export default function DemandSupplyDashboard() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fafbf9] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ecf0ea] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#131811]">
              <div className="size-4">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-[#131811] text-lg font-bold leading-tight tracking-[-0.015em]">
                AgriVision
              </h2>
            </div>
            <div className="flex items-center gap-9">
              <a className="text-[#131811] text-sm font-medium leading-normal" href="#">
                Dashboard
              </a>
              <a className="text-[#131811] text-sm font-medium leading-normal" href="#">
                Marketplace
              </a>
              <a className="text-[#131811] text-sm font-medium leading-normal" href="#">
                Insights
              </a>
              <a className="text-[#131811] text-sm font-medium leading-normal" href="#">
                Support
              </a>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-[160px] max-w-[256px] !h-10">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#6d8560] flex border-none bg-[#ecf0ea] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="w-6 h-6"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131811] focus:outline-0 focus:ring-0 border-none bg-[#ecf0ea] focus:border-none h-full placeholder:text-[#6d8560] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                  onChange={() => {}}
                />
              </div>
            </label>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbfVUzU5Q5nIxBj3eVQ0fkZiAan6R5k5d2MliXgbhugHPkpYnPeuL5ASF2SwdxKkuSYarZE4Uq4dfF8xmIfMN9j6yMIMfkdsypywfqRudJQCynpLI8ehWxeLjeTQC2CQQfixhFjFxIk_uKP5lKwU3bKNgfDQErml43Yrn-GwY85eVn55EhnYbqTeTJokLGSL3uGi_ivXEoNVTaT1p7lJhT6GqBJ4A_cbniJ4FPCpwOH6mDd_gfPyme_bmwC-mdcvJiEoFpOHK-iuM")',
              }}
            ></div>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#131811] tracking-light text-[32px] font-bold leading-tight">
                  Crop Demand &amp; Supply Overview
                </p>
                <p className="text-[#6d8560] text-sm font-normal leading-normal">
                  Analyze market dynamics to optimize your agricultural decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {["Region", "Crop Type", "Season", "Duration"].map((filter) => (
                <button
                  key={filter}
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#ecf0ea] pl-4 pr-2"
                >
                  <p className="text-[#131811] text-sm font-medium leading-normal">
                    {filter}
                  </p>
                  <div
                    className="text-[#131811]"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            <h2 className="text-[#131811] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Demand vs. Supply Heatmap
            </h2>
            <div className="flex px-4 py-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBpuFtV6bycb7BqsoZy22iYz2GmSJVy75tP7HKjI19Y4lE3-xh5f7kd9RLTi25fdiQPqR-rfC4wqhdleRAqzc-mBbIXQ7WQrzSE3U24DThpZdzE6-uhMVt-WbFOp7m2dNSjK2QSTVhk8vOgo8Z9CoX4WbJFxVQjCAUa6NM1Ze9E2nsc8CY1yQL_S5lBvd91L9a0deNPX-KtFj5jR1O8U9wXfE0L3JZcignBA3MDbEXih9L7KAwk-e4-yIMA5SMJ88h7keeHLH_lUA")',
                }}
              ></div>
            </div>

            <h2 className="text-[#131811] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Crop-wise Comparison
            </h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              {/* Crop Demand Comparison */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d9e1d6] p-6">
                <p className="text-[#131811] text-base font-medium leading-normal">
                  Crop Demand Comparison
                </p>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  {[
                    { name: "Wheat", height: "30%" },
                    { name: "Rice", height: "100%" },
                    { name: "Corn", height: "100%" },
                    { name: "Soybeans", height: "60%" },
                    { name: "Cotton", height: "90%" },
                  ].map(({ name, height }) => (
                    <React.Fragment key={name}>
                      <div
                        className="border-[#6d8560] bg-[#ecf0ea] border-t-2 w-full"
                        style={{ height }}
                      />
                      <p className="text-[#6d8560] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        {name}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Market Share by Crop */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d9e1d6] p-6">
                <p className="text-[#131811] text-base font-medium leading-normal">
                  Market Share by Crop
                </p>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  {[
                    { name: "Wheat", height: "100%" },
                    { name: "Rice", height: "30%" },
                    { name: "Corn", height: "80%" },
                    { name: "Soybeans", height: "40%" },
                    { name: "Cotton", height: "50%" },
                  ].map(({ name, height }) => (
                    <React.Fragment key={name}>
                      <div
                        className="border-[#6d8560] bg-[#ecf0ea] border-t-2 w-full"
                        style={{ height }}
                      />
                      <p className="text-[#6d8560] text-[13px] font-bold leading-normal tracking-[0.015em]">
                        {name}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="text-[#131811] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Price Trend Analysis
            </h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#d9e1d6] p-6">
                <p className="text-[#131811] text-base font-medium leading-normal">
                  Price Fluctuations Over Time
                </p>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg
                    width="100%"
                    height="148"
                    viewBox="-3 0 478 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    />
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#6d8560"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1131_5935"
                        x1="236"
                        y1="1"
                        x2="236"
                        y2="149"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ecf0ea"></stop>
                        <stop offset="1" stopColor="#ecf0ea" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map(
                      (month) => (
                        <p
                          key={month}
                          className="text-[#6d8560] text-[13px] font-bold leading-normal tracking-[0.015em]"
                        >
                          {month}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-[#131811] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              AI Insights
            </h2>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl bg-[#fafbf9] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#131811] text-base font-bold leading-tight">
                      Best Crops to Buy Next Month
                    </p>
                    <p className="text-[#6d8560] text-sm font-normal leading-normal">
                      Based on predictive analysis, consider investing in pulses
                      and oilseeds for optimal returns.
                    </p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#ecf0ea] text-[#131811] pr-2 gap-1 text-sm font-medium leading-normal w-fit"
                    type="button"
                  >
                    <div
                      className="text-[#131811]"
                      data-icon="ArrowRight"
                      data-size="18px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        className="w-4.5 h-4.5"
                      >
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                      </svg>
                    </div>
                    <span className="truncate">View Detailed Report</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDC9h4P0jLs6NmlmIqJKkP1hqvS4ZPaNnFcI0uL9TrLcTSZjV2k0UeRbJpuXqDRJDBSc4Dlz4wz2o-VbUFLpE1x6a4cU_HgkVL8JqplTqp1vWUn3qLCkZ-CHqUpiCy8IE4dyuzvF03iHgYm58RuRkpVdDb3OIXDUr7NjmEjK8w0Y6-2Zh1yE1KZhEU7BYQMgBYrGiOmn1PvPKVSlI1lg")',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
