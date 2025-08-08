import React, { useState } from 'react';

const CropRecommended = () => {
  const [activeSort, setActiveSort] = useState("Sort by Yield");

  const crops = [
    {
      title: "High-Yield Corn Variety",
      desc: "Variety: AgriCorn X500, Expected Yield: 150 bushels/acre, Reasons: High market demand, suitable for your soil type, and requires moderate water.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNPKrKP__tiZjmCUHiHoPsGZtgoPOP9o9or8bYPRuFSUhtVAmj_skplFBiTIeJ1c_LUv9i86szmfUBhTKzaCad62lW5JtM5xE5Wesg-vsmf7kB719trD6KqHv4xAQ75jzHUYn4T5YezexrEJSfmhXDNXp9NAdOalkQvCFW9w1YxbNnoBccNZBiz9jH7CTeM0ofgEhv_sWrQ7o9KCMIiNMz6dI4UB53clulMNdtTOnIlHLAvwW6_BRvyih_qw6EBGNZU3-twxEImcA"
    },
    {
      title: "Drought-Resistant Wheat",
      desc: "Variety: AgriWheat D200, Expected Yield: 80 bushels/acre, Reasons: Excellent drought resistance, suitable for your soil type, and requires low water.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq8P_uONuVdFgukC7Y7K8y7qKiP431wKxP8JM_TtzUgjiArNToagMEpKlKl3VUIwMt6FxbdjFAvkzpBcmPyleM_uSmy2LVn2N8G2FurGsqiDyk_GP4hc22ZgMZdHSr4xu5X7SmWnVrcxN9gXrjpWJCkjLUrX8BLqxO4PwD18PzZChObv64TcstVqNqFE0zh6vOzcOCTMHnsDMwRpkYcbkWcDM4F_X3BJwX8cmuhP6lhjZRakdxzuDpbAP98ekMWaWMNApmQrFKD0o"
    }
  ];

  return (
    <div>
      <div className="px-4 pt-5 pb-3">
        <h2 className="text-[22px] font-bold text-[#131811]">Recommended Crops</h2>
      </div>

      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {["Sort by Yield", "Sort by Water Needs"].map((label) => (
          <button
            key={label}
            onClick={() => setActiveSort(label)}
            className={`px-4 py-2 rounded cursor-pointer text-white ${
              activeSort === label ? "bg-green-700" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {crops.map(({ title, desc, img }) => (
        <div key={title} className="p-4">
          <div className="flex gap-4 rounded-xl bg-[#fafbf9] p-4 shadow">
            <div className="flex flex-col gap-1 flex-[2]">
              <p className="text-base font-bold text-[#131811]">{title}</p>
              <p className="text-sm text-[#6d8560]">{desc}</p>
            </div>
            <div
              className="aspect-video bg-cover bg-center rounded-xl flex-1"
              style={{ backgroundImage: `url('${img}')` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CropRecommended;
