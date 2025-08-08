import React from "react";

export default function CommunityForum() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f9fcf8] group/design-root overflow-x-hidden"
      style={{
        "--select-button-svg":
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(103,151,78)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
        fontFamily: 'Lexend, "Noto Sans", sans-serif',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Filter
            </h2>

            {/* Filters */}
            {[
              { label: "Crop", options: ["All Crops", "two", "three"] },
              { label: "Location", options: ["All Locations", "two", "three"] },
              { label: "Language", options: ["All Languages", "two", "three"] },
              { label: "Tags", options: ["All Tags", "two", "three"] },
            ].map(({ label, options }) => (
              <div
                key={label}
                className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
              >
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#121b0e] text-base font-medium leading-normal pb-2">
                    {label}
                  </p>
                  <select
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border border-[#d7e7d0] bg-[#f9fcf8] focus:border-[#d7e7d0] h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#67974e] p-[15px] text-base font-normal leading-normal"
                    defaultValue={options[0]}
                  >
                    {options.map((opt) => (
                      <option key={opt} value={opt.toLowerCase().replace(/\s+/g, "")}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            ))}

            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#4ab714] text-[#121b0e] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Apply Filters</span>
              </button>
            </div>
          </div>

          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#121b0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Community Feed
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#ebf3e7] text-[#121b0e] text-sm font-medium leading-normal">
                <span className="truncate">New Post</span>
              </button>
            </div>

            {/* Posts */}
            {[
              {
                author: "Sarah Miller",
                title: "Best Practices for Sustainable Wheat Farming",
                description:
                  "I'm looking for advice on sustainable wheat farming techniques. What are some effective methods for reducing environmental impact while maintaining high yields?",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuACsr7cYGTr55SRnfM-6Q8LziZKi9LXJgKCm9lUmkX3kO80KrpbNMmCFDEiZ4EU9NpyRF6oiNSB88NUhlBPQ3yXuCb0N7U3fZdfB802O-X62MTHNVHrdZLUqUlrBtkhQfaYTr03qg3CMoarrtAb3BiJ7DsgIAqc54FDK-hUyM5n3HqO84dAMtcxGYecEqCXHQUd_xX6u1r5g9B4BCv_Fh0q4OZebZypeSK5qeaa7DbQHTVVDGO2luGsRM7OBqdx-ceu7SRA2bLh3EE",
              },
              {
                author: "David Chen",
                title: "Success Story: Implementing AI in My Farm",
                description:
                  "I recently integrated AI-powered tools into my farm management, and the results have been incredible. I've seen a significant reduction in resource usage and an increase in crop yield. Happy to share my experience and answer any questions.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCu6Ly7ED4K34Bnmad7NjkrgJaa9cfer1MSSagLuIccT9PnmpFBKC1SgDk81EraqzwAQwvXq7y_eCw9qYRxgsIeNEIyIhSKvWUnA3wDhEBqHBhRaBEer5JjO-gFggiWsIaSLAiQmpSQtuvtfMibSrWgGStkqZLtVIlfys3FT4gjcas3ANa5jZEqDpwDs74vgg_aT_w74O7xqZgbIGRQ4rHZIJQ0QwJ5BmG3kXqvZRoLEm44dA3uQNraGy93pr6-8O0Oy20ouj6UnIU",
              },
              {
                author: "Maria Rodriguez",
                title: "Dealing with Pests Naturally",
                description:
                  "I'm facing pest issues in my vegetable garden and prefer natural solutions over chemical pesticides. Any recommendations for effective organic pest control methods?",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuANE7E39fT8DQ618MPF4MAkgca3riKYuX67ar_HVYtLD58pWvOr8d6jpZND9-xI_GW_55D--xv2PEFxTZ_sbgEDniFKLsPDanhR88HsqLVu0SwoGEKVJmLQHkCJ7oNmMcPdmFQKEqPItxOSi62QpuFRxcTwwFDVybbqkPiUi-RFEdTqFq8vUhWJeD2d9h16dSNM3DRZCGPZouInBZjLty6bU4FtCCV9oBDBsuWns-pGdWZRqfpg6mqGcb-VtrpiPdcTre7em8XdfoI",
              },
              {
                author: "Robert Johnson",
                title: "Water Conservation Techniques",
                description:
                  "Water scarcity is a growing concern in my region. What are some practical and efficient water conservation techniques that I can implement on my farm?",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVO-fdvtgPmRZ03yHlh4kD39dkCmXl0ULFenqFfd3i3YMhxAEF4oSDqKP0FGpOrrTQQhdjnuI5ygP88ZkooVOvuDoXuLihxB4UtRRrP1pFSJIKeoUSOXinQ9_1E_EjZc4PQCGkrz7Jvwip8g8rj_e8Gmi-7rht7nwGdMWqq5I5x7ajpJ_61cCD89CgMCWyvntDRG6dX2A5Wxx8fuZiH_-BDqsTmAc59yLAgtYBZcE8WiJEd30UBmC1u9C8LHCLYZw5WuvxLiYhzAc",
              },
              {
                author: "Emily Carter",
                title: "Improving Soil Health",
                description:
                  "I want to improve the soil health on my farm. What are some effective strategies for enhancing soil fertility and structure?",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAOWGu7a_Ua7UbNIt1haZGcmieTinD8eHMHChr9aVCs7B18TYVTYiYrDPo4zAUwM6dBjaDJR56mBwy4-e0qrcC6ge70A-TLCt5eRaq4-LCk3QuK9Mz8GovdUR5Kk-fYQtSpNU6T3uMt6vT9U1YqEDD4jqmsiaAbIrF8P2PCYJ4_tidUdFJUlCF1VqBbaL4ODFXopidmvy-wBmxiE-vhiDddyE4j5DrU6ex51SuT3bb3Bws4CG0-u6fiu73y9GVImO5ecJ93y-jyA7U",
              },
            ].map(({ author, title, description, image }) => (
              <div key={title} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    <p className="text-[#67974e] text-sm font-normal leading-normal">
                      Posted by {author}
                    </p>
                    <p className="text-[#121b0e] text-base font-bold leading-tight">
                      {title}
                    </p>
                    <p className="text-[#67974e] text-sm font-normal leading-normal">
                      {description}
                    </p>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
                <div
                  className="text-[#121b0e]"
                  data-icon="CaretLeft"
                  data-size="18px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
                  </svg>
                </div>
              </a>
              <a
                className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#121b0e] rounded-full bg-[#ebf3e7]"
                href="#"
              >
                1
              </a>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#121b0e] rounded-full"
                href="#"
              >
                2
              </a>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center jus    tify-center text-[#121b0e] rounded-full"
                href="#"
              >
                3
              </a>
              <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#121b0e] rounded-full">
                ...
              </span>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#121b0e] rounded-full"
                href="#"
              >
                10
              </a>
              <a href="#" className="flex size-10 items-center justify-center">
                <div
                  className="text-[#121b0e]"
                  data-icon="CaretRight"
                  data-size="18px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
