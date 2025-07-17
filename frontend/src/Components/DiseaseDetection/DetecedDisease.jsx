import React from 'react'

const DetecedDisease = () => {
  return (
    <div>
      <h2 className="text-[22px] font-bold px-4 pt-5 pb-3">Detection Results</h2>
      <p className="text-base px-4 pb-3">Results will be displayed here after processing the image. 
        This includes the detected issue, confidence score, annotated image, and treatment options.</p>
    </div>
  )
}

export default DetecedDisease
