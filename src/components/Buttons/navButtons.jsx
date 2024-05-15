import React, { useState, useEffect } from "react";
import DonationPopup from "../Popups/donationPopup";
import toast, { Toaster } from "react-hot-toast";

const NavButtons = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleDonate = () => {
    setPopupIsOpen(true);
  };

  const handleClosePopup = () => {
    setPopupIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full px-8 py-4 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <div></div>
        <div className="flex items-center">
          <button
            className="ml-auto bg-yellow-500 hover:bg-gray-200 text-black font-bold py-3 px-6 md:px-8 rounded-full md:my-0 text-sm md:text-md w-full md:w-auto"
            onClick={handleDonate}
          >
            Donate
          </button>
        </div>
      </div>
      {/* Popup for donation */}
      <DonationPopup isOpen={popupIsOpen} onClose={handleClosePopup} />
      <Toaster />
    </nav>
  );
};

export default NavButtons;
