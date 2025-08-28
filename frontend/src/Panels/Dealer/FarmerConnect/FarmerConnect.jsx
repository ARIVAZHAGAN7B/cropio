import React from "react";

export default function FarmerConnect() {
  const farmers = [
    {
      name: "Ethan Carter",
      crop: "Wheat",
      quantity: 500,
      location: "Springfield",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlhO9m7d_5NTHE7Nzoq7LvPWmAsMhuhvVKwH9YGw0ylObnxPWavGluATtvmjqk6cfitCLdojFTZK53pS-NSpTvL00RhVGnihBnGX63iztL7cfi5nfBzaTHNzRxJoQSkyRcLXf425582hOjXJriLeRX7urdmvsldItgjQ8JyMr5Dk4FcpeEQgQ4eA2SiZMZkpVE7_p9PlPfRLlgytfLHz5T4w1ZF9gQ0GTo3br5FUNWPV3kq-p0NwBXvD370IZT-qECv0TliVWZX0I",
    },
    // Add more farmers as needed (can be mapped)
  ];

  return (
    <div className="min-h-screen bg-[#fafbf9] font-['Lexend'] text-[#131811]">
      <div className="flex flex-col md:flex-row px-6 py-10">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-80 mb-10 md:mb-0">
          <h2 className="text-[22px] font-bold px-4 pb-3 pt-5">Filters</h2>
          <div className="space-y-6">
            <div className="px-4">
              <label className="block text-base font-medium pb-2">Crop Type</label>
              <select className="w-full h-14 rounded-xl border border-[#d9e1d6] bg-[#fafbf9] px-4">
                <option>Select Crop</option>
                <option>Wheat</option>
                <option>Corn</option>
              </select>
            </div>
            <div className="px-4">
              <label className="block text-base font-medium pb-2">Location</label>
              <select className="w-full h-14 rounded-xl border border-[#d9e1d6] bg-[#fafbf9] px-4">
                <option>Select Location</option>
                <option>Springfield</option>
                <option>Riverdale</option>
              </select>
            </div>
            <div className="px-4 flex justify-end">
              <button className="h-10 px-4 rounded-full bg-[#c5e0b7] text-sm font-bold">Apply Filters</button>
            </div>
          </div>
        </aside>

        {/* Farmers List */}
        <main className="flex-1 px-4">
          <div className="mb-6">
            <p className="text-2xl font-bold">Farmers Directory</p>
            <p className="text-[#6d8560] text-sm">Find farmers based on your requirements</p>
          </div>

          {farmers.map((farmer, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-stretch gap-4 rounded-xl bg-[#fafbf9] p-4 mb-6 shadow-md"
            >
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-sm text-[#6d8560]">Farmer</p>
                <p className="text-base font-bold leading-tight">{farmer.name}</p>
                <p className="text-sm text-[#6d8560]">
                  Crop: {farmer.crop}, Quantity: {farmer.quantity} tons, Location: {farmer.location}
                </p>
                <button className="h-8 px-4 w-fit bg-[#ecf0ea] text-sm font-medium rounded-full">
                  Message
                </button>
              </div>
              <div
                className="aspect-video bg-center bg-cover rounded-xl flex-1"
                style={{ backgroundImage: `url(${farmer.image})` }}
              ></div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}