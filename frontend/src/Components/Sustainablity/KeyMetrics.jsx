import React, { useEffect, useState } from 'react'

const Keymetrics = () => {
  const [data,setData] = useState({
    waterusage:0,
    chemicalinput:0,
    croprotation:0,
    soilhealth:0
  })
  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/user/sustainablity/keymetrics",{
        method: 'GET',
        headers: { 'Content-Type' : "application/json"},
        });
        const apidata = await response.json();
        setData(apidata);
      }
      fetchData();
  },[]);
  return (
    <div>
      <h2 className="text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">Key Metrics</h2>
            <div className="flex flex-wrap gap-4 p-4">
              {[
                { label: "Water Usage", value: data.waterusage },
                { label: "Chemical Input", value:data.chemicalinput },
                { label: "Crop Rotation", value: data.croprotation },
                { label: "Soil Health", value: data.soilhealth },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col flex-1 min-w-[158px] gap-2 p-6 rounded-xl border border-[#d7e7d0]">
                  <p className="text-base font-medium">{item.label}</p>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Keymetrics
