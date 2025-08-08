import React from "react";
import { Link } from "react-router-dom";
import HomeDashboard from "../Components/Home/HomeDashboard";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">

        {/* Header */}
        
        {/* Main Content */}
        <div className="flex-1 max-w-7xl mx-auto px-4 w-full">
        <main className="mt-10 space-y-16">

          {/* Welcome Section */}
          <section>
            <h1 className="text-3xl font-semibold">Welcome back, Ethan!</h1>
            <p className="text-gray-600 mt-2">Your personalized dashboard for sustainable farming.</p>
          </section>

          {/* Crop Recommendations */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Crop Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Wheat Varieties for Your Region",
                  text: "Discover the best wheat varieties suited for your farm's soil and climate.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtWo2z61gpuwRBzWdkGX9h5eHY41OORh12u2UX8Q8jnptjCCEi_2Jpk2aoAg3rpR3f8e4hRL2KU2iIBSvBPZglE8ecg9hivBOMn3QZzVZXZzDRsHhaS6FdC11w3ECzj8R39YPkY47eDko4fZCN7n4tEKQ94shrPnFmzkxYxfdSKomLBLmNauNp-xERs9govaI7i1zrrnByJqBS6Ps6687cVDPFE_Sfhf-1OYTqXBSyaK_o_2VX86_Qz5197M5RV-adnhO34vvmaes",
                },
                {
                  title: "Optimized Corn Cultivation",
                  text: "Maximize your corn yield with our expert cultivation techniques.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOnqCWPnRIpnS6xcwwXxVslXpcZ8-Jd8ODEt2zeWQ6ueufiMGy39CgV7jiVdkT7aa64uuSfqQI2oQmnfnyiwouwlDH3kR0fEplkrHlgS5TxN1msSRqpJG1TfbtZ9Wzny0d_cen9HzsaDYfYvKLF6vwNTaaC8-DpNP6t-vejL6G0NAZUaY4BrbrAJD6V14l_2zqy76tO00vrVeBnxTuz26guczKBtd8RCAFxuWSBhl_v0j1lOtdj2oVKA2DTrlFkqrfaSQ1xLc5iNI",
                },
                {
                  title: "Soybean Planting Strategies",
                  text: "Learn effective strategies for planting and nurturing soybeans.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKORHA3faWghYrGY5hZkZwZdWyKapp0IE-n1yZUHV23GkgGcBhsVyFH_QFf51mslNTvjwUyAx_T0JCaYW9Zb4QDkQxOF_rlaKUJsQS1xgBsKb9FoRMJ5kPBN5B7WlRwtiTdBn9-vcA2zTB-PPB2Xq-33_q3JnLAb6ZC74yT8CkCRUfqWbT2EFxldL3FYXECJpHKwV-Q8F52E0oAwtASNJlGG9kXivpaacMSiX7ZicAdPF9l2NARecAYQaVTXWpjDxvYVoKOfmTIAA",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow">
                  <div className="h-40 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${item.img})` }} />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Disease Detection */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Disease Detection</h2>
            <div className="flex flex-col md:flex-row bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold">Early Blight Detection</h3>
                <p className="text-gray-600 mt-2 mb-4">Identify early blight in your crops with our AI-powered tool.</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Detect Now</button>
              </div>
              <div className="md:w-1/2 h-56 md:h-auto bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCHuqTfBWDSbwZY9MkyyRyK4y_CRvloXUy3yXGLxZd5SlC4BQWH0W823qyOR3XrKhQ3TeuG0zjFtTZHnaQaEy6ma-FRGktm9THDNzkran7ejo2N5qlq6YW0GzGy9Shsmie2pYaM1iZbdXf4qoIsMLSuRzSh1Y6OvXNDgfHIefHFYide-iO8VwdzbBAHFXpmvy3aeh_18iU6uk135SSrlsCdzV8CvVFh9gCmi_6KP4e5nuieWvRsiBJj0xBf4yLoBcqahLYoWKiDmM')" }} />
            </div>
          </section>

          {/* Cultivation Guides */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Cultivation Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded shadow">🌱 Crop Rotation Techniques</div>
              <div className="bg-white p-4 rounded shadow">💧 Water Management Strategies</div>
              <div className="bg-white p-4 rounded shadow">☀️ Optimizing Sunlight Exposure</div>
            </div>
          </section>

          {/* Sustainable Practices */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Sustainable Practices</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded shadow">♻️ Organic Farming Methods</div>
              <div className="bg-white p-4 rounded shadow">🍃 Soil Conservation Practices</div>
              <div className="bg-white p-4 rounded shadow">🌍 Eco-Friendly Pest Control</div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-6">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded shadow">🌍 News</div>
              <div className="bg-white p-4 rounded shadow">🫂 Community</div>
              <div className="bg-white p-4 rounded shadow">💹 Market</div>
              <div className="bg-white p-4 rounded shadow">📃 Govt. Subsidy</div>
              <div className="bg-white p-4 rounded shadow">🌾 Yield Estimator</div>
            </div>
          </section>
          <section>
             <HomeDashboard/>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
