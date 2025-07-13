import React from "react";

export default function InsuranceLoans() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f9fcf8] overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full flex-col grow">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ebf3e7] px-10 py-3">
          <div className="flex items-center gap-4 text-[#121b0e]">
            <div className="w-16 h-16">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
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
            {/* Notification Bell Button */}
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 bg-[#ebf3e7] text-[#121b0e] gap-2 text-sm font-bold tracking-[0.015em] px-2.5"
              aria-label="Notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
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
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#121b0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Government Schemes &amp; Financial Aid
              </p>
            </div>

            {/* Tabs */}
            <div className="pb-3">
              <div className="flex border-b border-[#d7e7d0] px-4 gap-8">
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-[#4ab714] text-[#121b0e] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Crop Insurance
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#67974e] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Loans
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#67974e] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Subsidies
                  </p>
                </a>
              </div>
            </div>

            {/* Crop Insurance Section */}
            <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Crop Insurance Schemes
            </h2>
            <div className="flex items-center gap-4 bg-[#f9fcf8] px-4 min-h-[72px] py-2">
              <div className="text-[#121b0e] flex items-center justify-center rounded-lg bg-[#ebf3e7] shrink-0 w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#121b0e] text-base font-medium leading-normal line-clamp-1">
                  Pradhan Mantri Fasal Bima Yojana (PMFBY)
                </p>
                <p className="text-[#67974e] text-sm font-normal leading-normal line-clamp-2">
                  Eligibility: All farmers growing notified crops in notified
                  areas. Coverage: Covers yield losses due to natural
                  calamities, pests, and diseases.
                </p>
              </div>
            </div>
            <p className="text-[#121b0e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Application Steps: 1. Contact your nearest bank or insurance
              company. 2. Fill out the application form with necessary details.
              3. Submit required documents (land records, sowing details). 4.
              Pay the premium amount. 5. Receive the insurance policy document.
            </p>
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#ebf3e7] text-[#121b0e] text-sm font-bold tracking-[0.015em]">
                <span className="truncate">Learn More</span>
              </button>
            </div>

            {/* Loans Section */}
            <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Loans
            </h2>
            <div className="flex items-center gap-4 bg-[#f9fcf8] px-4 min-h-[72px] py-2">
              <div className="text-[#121b0e] flex items-center justify-center rounded-lg bg-[#ebf3e7] shrink-0 w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#121b0e] text-base font-medium leading-normal line-clamp-1">
                  Kisan Credit Card (KCC)
                </p>
                <p className="text-[#67974e] text-sm font-normal leading-normal line-clamp-2">
                  Crop Type: Rice, Wheat, Maize. Interest Rate: 7% per annum
                  (subject to change).
                </p>
              </div>
            </div>
            <p className="text-[#121b0e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Application Process: 1. Visit a participating bank. 2. Obtain the
              KCC application form. 3. Provide land ownership documents and crop
              details. 4. Undergo a credit assessment. 5. Receive the KCC card
              upon approval.
            </p>
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#ebf3e7] text-[#121b0e] text-sm font-bold tracking-[0.015em]">
                <span className="truncate">Apply Now</span>
              </button>
            </div>

            {/* Subsidies Section */}
            <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Subsidies
            </h2>
            <div className="flex items-center gap-4 bg-[#f9fcf8] px-4 min-h-[72px] py-2">
              <div className="text-[#121b0e] flex items-center justify-center rounded-lg bg-[#ebf3e7] shrink-0 w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M198.1,62.6a76,76,0,0,0-140.2,0A72.27,72.27,0,0,0,16,127.8C15.89,166.62,47.36,199,86.14,200A71.68,71.68,0,0,0,120,192.49V232a8,8,0,0,0,16,0V192.49A71.45,71.45,0,0,0,168,200l1.86,0c38.78-1,70.25-33.36,70.14-72.18A72.26,72.26,0,0,0,198.1,62.6ZM169.45,184a55.61,55.61,0,0,1-32.52-9.4q-.47-.3-.93-.57V132.94l43.58-21.78a8,8,0,1,0-7.16-14.32L136,115.06V88a8,8,0,0,0-16,0v51.06L83.58,120.84a8,8,0,1,0-7.16,14.32L120,156.94V174q-.47.27-.93.57A55.7,55.7,0,0,1,86.55,184a56,56,0,0,1-22-106.86,15.9,15.9,0,0,0,8.05-8.33,60,60,0,0,1,110.7,0,15.9,15.9,0,0,0,8.05,8.33,56,56,0,0,1-22,106.86Z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#121b0e] text-base font-medium leading-normal line-clamp-1">
                  Government Subsidies for Sustainable Agriculture
                </p>
                <p className="text-[#67974e] text-sm font-normal leading-normal line-clamp-2">
                  Scheme: National Mission on Sustainable Agriculture (NMSA).
                  Eligibility: Farmers adopting sustainable practices.
                </p>
              </div>
            </div>
            <p className="text-[#121b0e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Eligibility Checker: Use our online tool to check your eligibility
              based on your farming practices and location. Downloadable
              Resources: Access guidelines, application forms, and FAQs.
            </p>
            <div className="flex px-4 py-3 justify-start gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#ebf3e7] text-[#121b0e] text-sm font-bold tracking-[0.015em]">
                <span className="truncate">Check Eligibility</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#ebf3e7] text-[#121b0e] text-sm font-bold tracking-[0.015em]">
                <span className="truncate">Download Resources</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
