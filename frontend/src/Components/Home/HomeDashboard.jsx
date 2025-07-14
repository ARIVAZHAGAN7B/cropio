import React from "react";

export default function HomeDashboard() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f9fcf8] overflow-x-hidden"
      style={{ fontFamily: "Lexend, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Notifications
            </h2>
            {[
              {
                title: "Severe Weather Warning",
                subtitle: "Weather Alert",
                iconPath:
                  "M156,16A76.2,76.2,0,0,0,84.92...",
              },
              {
                title: "Corn Growth Stage",
                subtitle: "Crop Update",
                iconPath:
                  "M247.63,39.89a8,8,0,0,0-7.52-7.52...",
              },
              {
                title: "New Deal Request",
                subtitle: "Deal Request",
                iconPath:
                  "M119.76,217.94A8,8,0,0,1,112,224...",
              },
            ].map(({ title, subtitle, iconPath }, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#f9fcf8] px-4 min-h-[72px] py-2"
              >
                <div className="text-[#121b0e] flex items-center justify-center rounded-lg bg-[#ebf3e7] shrink-0 size-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d={iconPath} />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#121b0e] text-base font-medium leading-normal line-clamp-1">
                    {title}
                  </p>
                  <p className="text-[#67974e] text-sm font-normal leading-normal line-clamp-2">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}

            <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Account
            </h2>
            <div className="flex items-center gap-4 bg-[#f9fcf8] px-4 min-h-14">
              <div className="text-[#121b0e] flex items-center justify-center rounded-lg bg-[#ebf3e7] shrink-0 size-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M104,40H56A16,16,0..." />
                </svg>
              </div>
              <p className="text-[#121b0e] text-base font-normal leading-normal flex-1 truncate">
                Sync with Web Version
              </p>
            </div>

            <p className="text-[#67974e] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
              AgriWise Mobile App v1.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
