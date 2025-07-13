import React from "react";

export default function LogisticsIntegration() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fafbf9] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex-1 flex justify-center py-5">
          {/* Left Sidebar (Removed Navbar per request, keeping only header part) */}
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#fafbf9] p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <h1 className="text-[#131811] text-base font-medium leading-normal">AgriLink</h1>
                  <p className="text-[#6d8560] text-sm font-normal leading-normal">Farmer Portal</p>
                </div>
                {/* Navigation menu removed */}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#131811] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Logistics Management
              </p>
            </div>

            {/* Delivery Requests Table */}
            <h2 className="text-[#131811] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Delivery Requests
            </h2>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#d9e1d6] bg-[#fafbf9]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#fafbf9]">
                      <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal">
                        Shipment ID
                      </th>
                      <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal">
                        Crop
                      </th>
                      <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal">
                        Origin
                      </th>
                      <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal">
                        Destination
                      </th>
                      <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal">
                        Quantity
                      </th>
                      <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-[#131811] w-[400px] text-sm font-medium leading-normal">
                        Transporter
                      </th>
                      <th className="px-4 py-3 text-left text-[#131811] w-60 text-sm font-medium leading-normal">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "SHP-2024-001",
                        crop: "Wheat",
                        origin: "Farm A",
                        destination: "Warehouse X",
                        quantity: "100 tons",
                        date: "2024-07-15",
                        transporter: "Transporter 1",
                        status: "Pending",
                      },
                      {
                        id: "SHP-2024-002",
                        crop: "Corn",
                        origin: "Farm B",
                        destination: "Warehouse Y",
                        quantity: "150 tons",
                        date: "2024-07-16",
                        transporter: "Transporter 2",
                        status: "In Transit",
                      },
                      {
                        id: "SHP-2024-003",
                        crop: "Soybeans",
                        origin: "Farm C",
                        destination: "Warehouse Z",
                        quantity: "200 tons",
                        date: "2024-07-17",
                        transporter: "Transporter 3",
                        status: "Delivered",
                      },
                      {
                        id: "SHP-2024-004",
                        crop: "Rice",
                        origin: "Farm D",
                        destination: "Warehouse X",
                        quantity: "120 tons",
                        date: "2024-07-18",
                        transporter: "Transporter 4",
                        status: "Pending",
                      },
                      {
                        id: "SHP-2024-005",
                        crop: "Barley",
                        origin: "Farm E",
                        destination: "Warehouse Y",
                        quantity: "180 tons",
                        date: "2024-07-19",
                        transporter: "Transporter 5",
                        status: "In Transit",
                      },
                    ].map((shipment) => (
                      <tr key={shipment.id} className="border-t border-[#d9e1d6]">
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#131811] text-sm font-normal leading-normal">
                          {shipment.id}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#6d8560] text-sm font-normal leading-normal">
                          {shipment.crop}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#6d8560] text-sm font-normal leading-normal">
                          {shipment.origin}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#6d8560] text-sm font-normal leading-normal">
                          {shipment.destination}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#6d8560] text-sm font-normal leading-normal">
                          {shipment.quantity}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#6d8560] text-sm font-normal leading-normal">
                          {shipment.date}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#6d8560] text-sm font-normal leading-normal">
                          {shipment.transporter}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#ecf0ea] text-[#131811] text-sm font-medium leading-normal w-full">
                            <span className="truncate">{shipment.status}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Container Queries Styles in React - this needs CSS */}
              <style>{`
                @container (max-width:120px){ th:nth-child(1), td:nth-child(1) { display: none; } }
                @container (max-width:240px){ th:nth-child(2), td:nth-child(2) { display: none; } }
                @container (max-width:360px){ th:nth-child(3), td:nth-child(3) { display: none; } }
                @container (max-width:480px){ th:nth-child(4), td:nth-child(4) { display: none; } }
                @container (max-width:600px){ th:nth-child(5), td:nth-child(5) { display: none; } }
                @container (max-width:720px){ th:nth-child(6), td:nth-child(6) { display: none; } }
                @container (max-width:840px){ th:nth-child(7), td:nth-child(7) { display: none; } }
                @container (max-width:960px){ th:nth-child(8), td:nth-child(8) { display: none; } }
              `}</style>
            </div>

            {/* Route Optimization Section */}
            <h2 className="text-[#131811] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Route Optimization
            </h2>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#131811] text-base font-bold leading-tight">AI-Optimized Route</p>
                    <p className="text-[#6d8560] text-sm font-normal leading-normal">
                      Estimated savings: 15% on fuel costs
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#ecf0ea] text-[#131811] text-sm font-medium leading-normal w-fit">
                    <span className="truncate">View Route</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGvlwuzg1R9N9q8KpeXdSlHVK52_DD_eHtLOAEcOCmn3DR8pdUgfJ_pnOGEc5Ad6AY5wMfEhbqPb3-3L2uBiWD-bY-GKan4AWwrO28RGvZ3yO4k__GLnRVNuVod1HhoPaK5chf51U8eZkO88AVPguhoDN1xUgqgbDkdQiUkCbXFcEsocpcs00UzzKDThtDfuxKpqyVf8IUIJKoGAa0uGPFPCDidz9LngXla8LiCP4CkyssxVZMV8xC2EwFLho-sjs_1QG3OR1HD6A")',
                  }}
                />
              </div>
            </div>

            {/* Another Image */}
            <div className="flex px-4 py-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZXRkThvwr_i9hvqQf213Oo9m6OmTV_uyK1iU81RMa2ZmUIxzaUdKiVFggY8aHTPVKLncG9JopfjjnhR0HMlVicFVeBfGDd5Wi9KarG1lXwo42wir0NULocREoOlD14W5al4dARsFNqtjM2_uKIms9abJmi1C7T5w947USjCXFkmeqry8jqMTOZLzxa5u8Y7n_iO5qcUOgcryWm94UTW2wDxatHYN69u5L6zqBMurFQdaAMTiby8q2eiQ9ric27b8TGp7XF5U9e-A")',
                }}
              />
            </div>

            {/* Assign Transporter Section */}
            <h2 className="text-[#131811] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Assign Transporter
            </h2>

            {[
              {
                name: "Transporter 1",
                rating: "4.5 stars",
                vehicle: "Truck 1",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbpBhN8LAjS_cltk0fpJ8zNItHaE-_diYbAbGobU3EMyhaPFnhj0OAxRNe8CPL27Q10Kz4pzDs0aMqY8K2oVzSQPpi-3Ug_9UvZy9vNsngqWT-BRxgCaufrirw3TowsMeMFHndqSV5-1HiQ8kPHxkt60gFy6rD1AeFkG1ceQIgEQrpJ4_Kji-7c-czkQDgajihvVhKIUDLZNJX0kFnw9O8pVWD55On5cR2uDb-sjv_ynfOcI5SUjbKLSHz1Om3daj0wfuKOF_me48",
              },
              {
                name: "Transporter 2",
                rating: "4.2 stars",
                vehicle: "Truck 2",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdIo0ncWssOXC5td1dLynL0cTRQoQgTFEjymRp9ulNC5oEfURz3X98CIrtc_MR5yJ6Z4YSLpEufRzKVLS_igqDkl-Af7g4Iwmn1CFAJJXwCarKn9MufM2eMsmWzZDP3xwOIXA8P7B0rry5wVLmpZ8S8e8XQVYKKZIdN-F8nfYRXOF_5QdyeOsxlcTmoMqKeHxRw5NhW7rHXonsGJhz-CrWoLTCewl4l_N4UsF6chdpm_hVR0p3nHInnJa6xpZAxySlOlJoeIv5P-I",
              },
              {
                name: "Transporter 3",
                rating: "4.8 stars",
                vehicle: "Truck 3",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGq_9hoXu6_DEYBQWaOrIIKHjVPIIp_FlIMnd7nxTC2krfkEBz1FB7pgB68Y_zcnXrV6uA97iTbpSdZZ9o2uJss5o1cbmWtxOSkW9XzerF2IzcKXEXtnjWco45MRn9HMLtWeJ1jeGJu5uV8D7BgetW4FhfXREB5X07O5jgdUNgrmAruo2IOejCw-NeNppVUF8do8sCGs7HDJ5oHoLI_jgI34tquYwUXWNnvk2EE5X4-N_N8HlQArQoF4NBo-wnEZFvBOg1J7euCgU",
              },
            ].map(({ name, rating, vehicle, img }) => (
              <div key={name} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#131811] text-base font-bold leading-tight">{name}</p>
                      <p className="text-[#6d8560] text-sm font-normal leading-normal">
                        Rating: {rating} | Vehicle: {vehicle}
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#ecf0ea] text-[#131811] text-sm font-medium leading-normal w-fit">
                      <span className="truncate">Assign</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </div>
              </div>
            ))}

            {/* Integrate button */}
            <div className="flex px-4 py-3 justify-end">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ecf0ea] text-[#131811] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Integrate with Third-Party API</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
