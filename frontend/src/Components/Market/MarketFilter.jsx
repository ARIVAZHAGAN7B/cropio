import React from "react";

const categories = ["All Products", "Grains", "Vegetables", "Fruits"];
const locations = ["All Locations", "USA", "Mexico"];
const deliveryOptions = ["All", "Available", "Unavailable"];

const MarketFilter = ({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  location,
  setLocation,
  delivery,
  setDelivery,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  return (
    <div className="layout-content-container flex flex-col w-80">
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
              <input
                placeholder="Search for products"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border-none bg-[#ebf3e7] focus:border-none h-full placeholder:text-[#67974e] px-4 border-l-0 pl-4 text-base font-normal leading-normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
        </label>
      </div>

      <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Filters
      </h2>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <select
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border border-[#d7e7d0] bg-[#f9fcf8] focus:border-[#d7e7d0] h-14 bg-[image:--select-button-svg] placeholder:text-[#67974e] p-[15px] text-base font-normal leading-normal"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <select
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border border-[#d7e7d0] bg-[#f9fcf8] focus:border-[#d7e7d0] h-14 bg-[image:--select-button-svg] placeholder:text-[#67974e] p-[15px] text-base font-normal leading-normal"
            value= {location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <select
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border border-[#d7e7d0] bg-[#f9fcf8] focus:border-[#d7e7d0] h-14 bg-[image:--select-button-svg] placeholder:text-[#67974e] p-[15px] text-base font-normal leading-normal"
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
          >
            {deliveryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="@container">
        <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row">
          <p className="text-[#121b0e] text-base font-medium leading-normal w-full shrink-[3]">
            Price Range
          </p>
          <div className="flex gap-2 h-[38px] w-full pt-1.5">
            <input
              type="number"
              placeholder="Min"
              className="form-input w-full max-w-[80px] rounded-xl border border-[#d7e7d0] bg-[#f9fcf8] px-3 text-[#121b0e]"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              min="0"
            />
            <input
              type="number"
              placeholder="Max"
              className="form-input w-full max-w-[80px] rounded-xl border border-[#d7e7d0] bg-[#f9fcf8] px-3 text-[#121b0e]"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              min="0"
            />
          </div>
        </div>
      </div>

      <div className="flex px-4 py-3 justify-end">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
          type="button"
          onClick={() => {
            // You can implement "Apply Filters" logic if needed, but
            // we apply filters live so this can reset filters or no-op
          }}
        >
          <span className="truncate">Apply Filters</span>
        </button>
      </div>
    </div>
  );
};

export default MarketFilter;
