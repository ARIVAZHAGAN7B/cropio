import React, { useState, useEffect } from "react";
import FarmerRoutes from "../PublicRoutes/FarmerRoutes";
import DealerRoutes from "../PublicRoutes/DealerRoutes";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import DealerNavbar from "../Components/Navbar/DealerNavbar";
const AppLayout = () => {
  const [user, setUser] = useState("Farmer");

  useEffect(() => {
    const handleUserChange = () => {
      setUser(localStorage.getItem("user") || "");
    };
    window.addEventListener("userChanged", handleUserChange);
    window.addEventListener("storage", handleUserChange);

    return () => {
      window.removeEventListener("userChanged", handleUserChange);
      window.removeEventListener("storage", handleUserChange);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        {user === "Farmer" && <Navbar />}
        {user === "Dealer" && <DealerNavbar />}
      </div>
      <div>
        <div className="ml-100px">
          {user === "Farmer" && <FarmerRoutes />}
          {user === "Dealer" && <DealerRoutes />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
