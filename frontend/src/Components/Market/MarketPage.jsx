import React, { useState } from "react";

const MarketPlace = ({ products }) => {
  const categories = ["All Products", "Grains", "Vegetables", "Fruits"];
  const [activeCategory, setActiveCategory] = useState("All Products");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Filter products based on category
  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#121b0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Marketplace
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`${
                isActive
                  ? "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                  : "h-10 px-4 rounded bg-[#ebf3e7] text-[#121b0e] cursor-pointer"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* No products found */}
      {filteredProducts.length === 0 && (
        <p className="px-4 py-8 text-center text-[#67974e] text-lg font-medium">
          No products found with the selected filters.
        </p>
      )}

      {/* Products List */}
      {filteredProducts.map(
        ({ title, available, quantity, price, delivery, image }) => (
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
                  Quantity: {quantity} kg | Price: ${price}/kg | Delivery:{" "}
                  {delivery}
                </p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MarketPlace;
