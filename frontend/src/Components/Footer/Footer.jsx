import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#c5e0b7] py-6 mt-auto font-bold text-[#131811]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} codexcoders. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
