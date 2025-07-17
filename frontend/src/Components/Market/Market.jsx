import React from "react";

export default function MarketplaceAccess() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f9fcf8] group/design-root overflow-x-hidden"
      style={{
        "--select-button-svg":
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(103,151,78)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
        fontFamily: "Lexend, 'Noto Sans', sans-serif",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="text-[#67974e] flex border-none bg-[#ebf3e7] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  placeholder="Search for products"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border-none bg-[#ebf3e7] focus:border-none h-full placeholder:text-[#67974e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  defaultValue=""
                />
              </label>
            </div>

            <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Filters
            </h2>

            {["Category", "Location", "Delivery Options"].map((label, idx) => (
              <div
                key={label}
                className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
              >
                <label className="flex flex-col min-w-40 flex-1">
                  <select
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border border-[#d7e7d0] bg-[#f9fcf8] focus:border-[#d7e7d0] h-14 bg-[image:--select-button-svg] placeholder:text-[#67974e] p-[15px] text-base font-normal leading-normal"
                    defaultValue="one"
                  >
                    <option value="one">{label}</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                  </select>
                </label>
              </div>
            ))}

            <div className="@container">
              <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row">
                <p className="text-[#121b0e] text-base font-medium leading-normal w-full shrink-[3]">
                  Price Range
                </p>
                <div className="flex h-[38px] w-full pt-1.5">
                  <div className="flex h-1 w-full rounded-sm bg-[#d7e7d0] pl-[60%] pr-[15%]">
                    <div className="relative">
                      <div className="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
                        <div className="size-4 rounded-full bg-[#4ab714]" />
                        <p className="text-[#121b0e] text-sm font-normal leading-normal">
                          10
                        </p>
                      </div>
                    </div>
                    <div className="h-1 flex-1 rounded-sm bg-[#4ab714]" />
                    <div className="relative">
                      <div className="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
                        <div className="size-4 rounded-full bg-[#4ab714]" />
                        <p className="text-[#121b0e] text-sm font-normal leading-normal">
                          1000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex px-4 py-3 justify-end">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#4ab714] text-[#121b0e] text-sm font-bold leading-normal tracking-[0.015em]"
                type="button"
              >
                <span className="truncate">Apply Filters</span>
              </button>
            </div>
          </div>

          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#121b0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Marketplace
              </p>
            </div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {["All Products", "Grains", "Vegetables", "Fruits"].map((category) => (
                <div
                  key={category}
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#ebf3e7] pl-4 pr-4"
                >
                  <p className="text-[#121b0e] text-sm font-medium leading-normal">
                    {category}
                  </p>
                </div>
              ))}
            </div>

            {[ 
              {
                title: "Organic Wheat",
                available: true,
                quantity: "500 kg",
                price: "$2/kg",
                delivery: "Available",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKJLq2jjObMy83X7SsFPEzk6j9TI2pjUVE49Dui2q88SxFtODT_Nz3OkZAb9kmlyJ-gs1LwfqMnrOBkGI5jAsTkf_sUOBFVOgfhzoDOFQ8-StZ-e1rB_HSwn8z8YZp70z07Td96n6eSK-rQFnm6XuebgIV74Hreei1YKPrTYoLSR6VOShso3BBvuAMxCmoD5gaMlsgxahYxzlvrO9Z8WVoRMLqgYAaEdGEM-Zkm5zgsjybraPOmicevbVb-u5l50W107LyArTmBv0",
              },
              {
                title: "Fresh Tomatoes",
                available: true,
                quantity: "200 kg",
                price: "$1.5/kg",
                delivery: "Available",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBwCjGJ-1VOsroSDqYMTtoJSlIYTgTNqlEBm-2rvqd-eJ6aN_Y-4hHdQSMQQMbiWDcHHcov7yr4TjxJtg26c8IW6hver8iZudZh5Gkiit1fkX9KTcgHe8JJ_3YC7Re0fW__Oy1RfGLA1NKcKxKE8wMQJoEQDw-3hPzVqRqDCxNezEbAS8kqwwKEgLqPxuAUO8a5Lw6Aca3ODQ4n-sJedUsUJg47RgBKqngiRhaES2ya5JowgZvlcIQId4nzxRgXuxyzQgtq8kGVi3E",
              },
              {
                title: "Apples",
                available: true,
                quantity: "300 kg",
                price: "$1/kg",
                delivery: "Available",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXnXZQXE8PvIs5ySp7p4WwHVvHuOhE-xCru0e7fj79ZfVA7wuDlmTcxL98LTfz5RS_4N5qXZQpsQc36IKi9JjbZBVKXU-1ejXjI1znfneXFqyFqXZ4No-tqVxWxI-4Nf4UY9joiPb8s0CYpWAwitfmm3L-JnS8b5xYj4miluDxKyDisF08PGJyxgbfX0iJNsmUhN4xkWv7kINqZtnqGX7OFvMTJ87-DGDHnJU9I3PUEam5QJuvzj1OLWgrrf1VuHO2tnr5JbXPt6w",
              },
              {
                title: "Corn",
                available: true,
                quantity: "400 kg",
                price: "$0.8/kg",
                delivery: "Available",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAQNHQgoZl--PT5YWOVxoAG93vDcCyXV7bB4cXu9tD3rJTroIdisBkvf9-1muc4LdyRkBePnPq6-oaxDQjMTib53mMRd_eKQMBTZZz3WjAh_xvQ0o-oVnX85LktW9ViSRiFMd_PHqp2mWZI_asPX-Z1u-xVYd3CzfUcqRHqAF3VNcR5RHXGN1bbEU686SuEaheYHD7zddZl1AjdKe-4MZiZ466Qnv_YLaG6eXB508UpKYr24c_b1Z_H912tlOuDkwQ1NfFTjOgphvY",
              },
            ].map(({ title, available, quantity, price, delivery, image }) => (
              <div key={title} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    <p className="text-[#67974e] text-sm font-normal leading-normal">
                      {available ? "Available" : "Unavailable"}
                    </p>
                    <p className="text-[#121b0e] text-base font-bold leading-tight">
                      {title}
                    </p>
                    <p className="text-[#67974e] text-sm font-normal leading-normal">
                      Quantity: {quantity} | Price: {price} | Delivery: {delivery}
                    </p>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
              </div>
            ))}

            <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
                <div className="text-[#121b0e]" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
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
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#121b0e] rounded-full"
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
                <div className="text-[#121b0e]" data-icon="CaretRight" data-size="18px" data-weight="regular">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
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
