import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const DiseaseInput = () => {
  const [, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    e.target.value = ''; // Reset input
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setPreviewUrl(imageSrc);
      setImageFile(null); // Reset file input
      setShowCamera(false);
    }
  };

  return (
    <div>
      <p className="text-[32px] font-bold px-4">Plant Health Detection</p>
      <h2 className="text-[22px] font-bold px-4 pt-5 pb-3">Upload Image or Use Camera</h2>

      <div className="p-4">
        <div className="flex flex-col items-center gap-6 border-2 border-dashed border-[#d9e1d6] rounded-xl px-6 py-14">
          <p className="text-lg font-bold text-center">Drag and drop or browse</p>
          <p className="text-sm text-center">
            Upload an image of the plant or use your camera to capture a live image for detection.
          </p>

          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button
            onClick={handleUploadClick}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
          >
            Upload Image
          </button>
          
          {previewUrl && (
            <div className="mt-4">
              <img src={previewUrl} alt="Preview" className="max-w-xs rounded shadow" />
            </div>
          )}
        </div>
      </div>

      <div className="px-4 py-3 flex gap-4 justify-around">
        <button
          onClick={() => setShowCamera(!showCamera)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
        >
          {showCamera ? 'Close Camera' : 'Use Camera'}
        </button>

        {showCamera && (
          <button
            onClick={handleCapture}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Capture Photo
          </button>
        )}
        <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer'>Get Detection Result</button>
      </div>

      {showCamera && (
        <div className="p-4 flex justify-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded shadow max-w-sm"
            videoConstraints={{
              facingMode: 'environment', // Use back camera on mobile
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DiseaseInput;
