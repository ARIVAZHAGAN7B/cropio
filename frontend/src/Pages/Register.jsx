import React from "react";

const RegisterForm = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fafbf9] overflow-x-hidden"
      style={{
        fontFamily: "Lexend, 'Noto Sans', sans-serif",
        "--checkbox-tick-svg":
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(19,24,17)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
        "--select-button-svg":
          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(109,133,96)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
      }}
    >
      <div className="flex h-full grow flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-xl py-5">
          <h2 className="text-[#131811] text-[28px] font-bold text-center pb-3 pt-5">
            Create your AgriWise account
          </h2>
          <p className="text-[#131811] text-base text-center px-4 pb-3">
            Join our community of farmers and dealers to optimize your
            agricultural practices and maximize your yields.
          </p>

          {[
            { label: "Full Name", placeholder: "Enter your full name" },
            { label: "Email Address", placeholder: "Enter your email address" },
            { label: "Password", placeholder: "Create a password", type: "password" },
            { label: "Confirm Password", placeholder: "Confirm your password", type: "password" },
            { label: "Phone Number (Optional)", placeholder: "Enter your phone number" },
          ].map(({ label, placeholder, type = "text" }, i) => (
            <div className="px-4 py-3" key={i}>
              <label className="flex flex-col w-full">
                <p className="text-[#131811] text-base font-medium pb-2">
                  {label}
                </p>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="form-input w-full rounded-xl border border-[#d9e1d6] bg-[#fafbf9] p-[15px] text-base text-[#131811] placeholder-[#6d8560] focus:outline-none focus:ring-0 h-14"
                />
              </label>
            </div>
          ))}

          {/* Password Strength */}
          <div className="flex flex-col gap-3 p-4">
            <div className="flex justify-between">
              <p className="text-[#131811] text-base font-medium">
                Password Strength
              </p>
            </div>
            <div className="w-full bg-[#d9e1d6] rounded">
              <div className="h-2 rounded bg-[#c5e0b7]" style={{ width: "60%" }} />
            </div>
            <p className="text-[#6d8560] text-sm">Medium</p>
          </div>

          {/* User Type */}
          <div className="px-4 py-3">
            <label className="flex flex-col w-full">
              <p className="text-[#131811] text-base font-medium pb-2">
                User Type
              </p>
              <select
                className="form-input w-full rounded-xl border border-[#d9e1d6] bg-[#fafbf9] p-[15px] text-base text-[#131811] bg-[image:var(--select-button-svg)] focus:outline-none focus:ring-0 h-14"
              >
                <option value="">Select...</option>
                <option value="farmer">Farmer</option>
                <option value="dealer">Dealer</option>
                <option value="researcher">Researcher</option>
              </select>
            </label>
          </div>

          {/* Terms Checkbox */}
          <div className="px-4">
            <label className="flex items-start gap-3 py-3">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-[#d9e1d6] border-2 bg-transparent text-[#c5e0b7] checked:bg-[#c5e0b7] checked:border-[#c5e0b7] checked:bg-[image:var(--checkbox-tick-svg)] focus:ring-0 focus:outline-none"
              />
              <p className="text-[#131811] text-base">
                I agree to the Terms of Service and Privacy Policy
              </p>
            </label>
          </div>

          {/* Submit Button */}
          <div className="px-4 py-3">
            <button className="w-full h-12 rounded-full bg-[#c5e0b7] text-[#131811] text-base font-bold">
              Register
            </button>
          </div>

          <p className="text-[#6d8560] text-sm text-center px-4 pt-1">
            Already have an account?
          </p>
          <p className="text-[#6d8560] text-sm text-center px-4 underline">
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
