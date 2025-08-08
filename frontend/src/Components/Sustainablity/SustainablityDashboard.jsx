import React from 'react'

const SustainablityDashboard = () => {
  return (
      <div className="p-4">
              <div className="flex flex-col @xl:flex-row rounded-xl bg-[#f9fcf8] shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div
                  className="w-full aspect-video bg-cover bg-center rounded-xl"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8ZPzz11_P_aPMxRyhqPPOB-4p3HmALUCrrEHdMJ64SBNv06yOieOMq2kveJqMA3hasW61cH2lbep3Xo-x4m-nAVuCIo4dwjC6Jjx2Adde03yTfh8zDrW3DZl68Fr8vIcROFXqMa-CIQttAucZOx2BGnA7JsawFrTAcBDNo0C3NSvFBlQ8608xHBKDh4rtddxOf30vvJOY5TeerLezDzZYV_RGbHuv_5Mkjq8sFLk35nzopf3Ngzo1aYoPCgFHYSs9OmjkTKMrO_Y')",
                  }}
                ></div>
                <div className="flex flex-col gap-1 py-4 px-4">
                  <p className="text-lg font-bold">Sustainability Score</p>
                  <div className="flex justify-between items-end gap-3">
                    <div className="flex flex-col">
                      <p className="text-[#67974e] text-base">Overall sustainability score based on your farming practices.</p>
                      <p className="text-[#67974e] text-base">Updated 2 days ago</p>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default SustainablityDashboard
