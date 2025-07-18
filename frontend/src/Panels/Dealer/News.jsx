import React from "react";

const News = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f9fcf8] overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-10 py-3 border-b border-[#ebf3e7] flex justify-between items-center">
          <div className="flex items-center gap-4 text-[#121b0e]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-[-0.015em]">AgriAssist</h2>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex min-w-40 h-10 max-w-64">
              <div className="flex w-full items-center rounded-xl h-full bg-[#ebf3e7]">
                <div className="pl-4">
                  <svg width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11..." />
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="w-full px-4 h-full bg-[#ebf3e7] text-[#121b0e] placeholder:text-[#67974e] rounded-xl border-none focus:outline-none"
                />
              </div>
            </label>
          </div>
        </div>

        <div className="px-10 py-5">
          <h1 className="text-[32px] font-bold text-[#121b0e] mb-4">Agricultural News & Updates</h1>

          <div className="flex gap-4 border-b border-[#d7e7d0] pb-2 mb-4">
            {['News', 'MSP Updates', 'Policies', 'Schemes'].map((tab, index) => (
              <button
                key={tab}
                className={`pb-2 font-bold text-sm tracking-[0.015em] ${
                  index === 0 ? 'text-[#121b0e] border-b-4 border-[#4ab714]' : 'text-[#67974e]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-3 mb-4">
            {['Crop', 'Source'].map((filter) => (
              <button
                key={filter}
                className="flex items-center gap-2 bg-[#ebf3e7] px-4 h-8 rounded-full text-sm font-medium text-[#121b0e]"
              >
                {filter}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8..." />
                </svg>
              </button>
            ))}
          </div>

          {[
            {
              title: "New Government Initiatives for Farmers",
              desc:
                "The government has announced new initiatives to support farmers in the upcoming season, including subsidies for seeds and fertilizers.",
              img:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB311kyWdkkheMDUSApiertldQlZ4mA3_JoUg_ct2X7G5KDfjwnj9ajY16CtYaEEFLjCr8wbK7g6DEs6R5I31YZW4kdrIa0MDxRMhw4Ere0XHUI_zk4m6Qf3OvglYjTeK0Strr6mImKqaZtWdKCdI4H8Me53iqNA201N67eXBWxIlaniXAvJqlZTRgqW-dsbhAgyzd_sfpz7-TO_9eYMThq6bEeIH7YmaD3elnRsOVtWNeVWAeixPoOGjAgG_uYOXnEluksia8dBoY",
            },
            {
              title: "Weather Impacts on Crop Yields",
              desc:
                "Recent weather patterns have significantly impacted crop yields in the southern regions, leading to concerns about food security.",
              img:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXm6YJivEGRBsl5btnVu2QyxkdcsuBck5m-2r3P6eKf7xPxbITo_6mjrNyT7FCmc87wk8f7lERI8QCSkGWp6ASvN2uyHqSxH9X2RT0aXewoL21_tDhfwdenE7krNbKlNkGzSlSf6xpG_5els0Iu_G2suziDNBf_h7FVKcQb1kvlpNWkPs7v-Q2iWSOft3_uaOP5FSyiNZ3bROpDETkKBDlZyRqsQ1MfTM8iZYeR1s6HA2u1ByqiDyFj8zxvb1YBV0pvT-O0eIQcU",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4 bg-[#f9fcf8] p-4 mb-4 rounded-xl shadow-sm">
              <div
                className="bg-center bg-cover rounded-lg size-[70px]"
                style={{ backgroundImage: `url('${item.img}')` }}
              ></div>
              <div className="flex flex-col">
                <p className="text-base font-medium text-[#121b0e]">{item.title}</p>
                <p className="text-sm text-[#67974e]">Read More</p>
                <p className="text-sm text-[#67974e]">{item.desc}</p>
              </div>
            </div>
          ))}

          <div className="flex justify-end px-4">
            <button className="rounded-full h-10 px-4 bg-[#ebf3e7] text-sm font-bold text-[#121b0e]">
              Get Push Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
