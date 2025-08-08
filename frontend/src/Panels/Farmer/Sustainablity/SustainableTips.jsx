import React from "react";

export default function SustainableTips() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fafbf9] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Navbar removed as per your instruction */}

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#131811] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Sustainable Farming Tips
              </p>
            </div>

            <h3 className="text-[#131811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Explore Sustainable Practices
            </h3>

            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {/* Card 1 */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD69N_Lhm1Z-lzq5P2T1vnoVkIQdxf8Vn8ZAIfEzTQVBhMbak0BXbjLW-SxGusGbPTv_CwtjzQmVjVzYtUTpE2u_u31E1pyLlDVKeZuIwU5xvgZGEhJ-g7oFYY6X1FybmKtjpwT26V7c3MrlMi6rRX-OTcxT1gmcgWn5nRyhA9jOrpusuFVrlUbUAXi1eJQljChqg2omvAo2psHu7sttdnngJytLzY8QH5IB8i-HDLUm-j5RnFreVN7e6rPb-kOXts_-DYmuCka44c")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#131811] text-base font-medium leading-normal">
                      Organic Farming
                    </p>
                    <p className="text-[#6d8560] text-sm font-normal leading-normal">
                      Learn about organic farming techniques.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGm8RNYWX0AlXgvKZL9JiStzvZpuuYdWGHicR7txylZC8SbIj7eZMURv_RC8_z3m-gMG886d0sCTiyoYezYHpPSZZNc6XSBnYJ1lDRcAQ8rE-gp9ytQNjeSwI5a0R88_DvnU2oVw3AXLm2UT9PepdXYD-n766PJuV5S05gsMt1XRPylKbihYJYNLkVfJVey1TSVwOQHRZwvt0zp1EPClASvD9xntBsG5eEw1G1dLtGoutsr7YvTCw0fWLDYsXlGNi2EAbbj6tuF0Y")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#131811] text-base font-medium leading-normal">
                      Soil Conservation
                    </p>
                    <p className="text-[#6d8560] text-sm font-normal leading-normal">
                      Discover soil conservation practices.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOyiFhMCGBTQJK-0UPLl1bqdxBNp7iKf8pXJ93PRdcFElEBT3H2NfIgZGUlHu9I6uXPsX-LDc4qg_w0FUzvq-bJajRBz8dO9QuQIhD6VeU_waalfW3BhL3a3RIYhv2iGrEo9Cdi5kdDBH5kk9n4g3Ibomblum9jaS1PMr5hUbsO9vCmSLatUTP6f_hQalr2brSAYNTPGr7kjpXpceY4u8gyYnIpplFHQrtxBp9yeeuTpuO4U6x3RTqEt46f1z2VaxTZiQR4j0qVoQ")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#131811] text-base font-medium leading-normal">
                      Water Saving Methods
                    </p>
                    <p className="text-[#6d8560] text-sm font-normal leading-normal">
                      Explore water saving methods.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkC0jhH_0NtnQ5SS4HwqBzQXoL9rOgWnCNFtmxt7eu-sB6nSyLEo9nBM45oKJUKfe4bjZoYAzeB9SU7ai3W1vFb4gE_fiVhmdk-5vWzkMEPwdWfV3wohj7g7KX-0eeXgGd0imfRAAD366OhuQUX5qwQXezPq1NRSI81aFT6Yv5OCsz5xNnYqNPNKq_Bw-Catfe9A6IPhXF5ZC4MlvF4AX8wFbYxZaMI7PjFwna5C8RRwkrTq9ZG8ucywyEKDdN6e3dwvaYI2F8OcA")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#131811] text-base font-medium leading-normal">
                      Biodiversity
                    </p>
                    <p className="text-[#6d8560] text-sm font-normal leading-normal">
                      Enhance biodiversity on your farm.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-[#131811] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              AI Assistant
            </h3>

            <div className="flex w-full items-center gap-3 px-4 py-3 bg-white rounded-xl border border-[#d9e1d6]">
              <textarea
                placeholder="Ask me anything about sustainable farming..."
                className="flex-1 resize-none overflow-hidden rounded-lg text-[#131811] focus:outline-none focus:ring-0 border border-transparent bg-transparent min-h-[60px] placeholder:text-[#6d8560] p-2 text-base"
                rows={1}
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
