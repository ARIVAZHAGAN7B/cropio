import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ebf3e7] px-10 py-3">
      <div className="flex items-center gap-4 text-[#121b0e]">
        <div className="w-16 h-16">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-[#121b0e] text-lg font-bold leading-tight tracking-[-0.015em]">
          AgriAssist
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8 items-center">
        <button
          className="flex max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 bg-[#ebf3e7] text-[#121b0e] gap-2 text-sm font-bold tracking-[0.015em] px-2.5"
          aria-label="Notifications"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
          </svg>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-40 h-40"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVSHFoEmuZy9Szr5lxYDKLkwnCYa4U34ypA93eTX4JPyNovtjeTscdQnk2m20SWv43mgdfUjMV_8NjQDNkihH95hccPGwCikQWbikdDdvgY-3JUJlP4EpfbNgXUjWCqgqTbB9dfEc-uW5kQojBgPN-rVvmzA9xiNqs3YgaamaygjEsBbhdgWFv817V91OMBVI0vOiUUeKv2jrCi4G-9x9ma42yUGuAwPraoyDxoszlbc2At-kh5MaaaNBBhSgfP1t3bJBXW58rDXw")',
          }}
        />
      </div>
    </header>
  );
}
