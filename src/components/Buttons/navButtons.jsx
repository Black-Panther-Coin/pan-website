import React, { useState, useEffect } from "react";
import DonationModal from "../Modal/donationModal";

const NavButtons = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobile(isMobile);
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
    // Open the modal when the "Donate" button is clicked
    setModalIsOpen(true);
  };

  const closeModal = () => {
    // Close the modal
    setModalIsOpen(false);
  };

  const handleDonateConfirm = (amount) => {
    // Add logic to handle donation with the selected amount
    console.log("Donating amount:", amount);
    // Close the modal after donation confirmation
    setModalIsOpen(false);
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
            className="ml-auto bg-yellow-500 hover:bg-gray-200 text-black font-bold py-3 px-6 md:px-8 rounded-full md:my-0 text-sm md:text-md w-full md:w-auto "
            onClick={handleDonate}
          >
            Donate
          </button>
        </div>
      </div>
      {/* Modal for donation */}
      <DonationModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onDonate={handleDonateConfirm}
      />
    </nav>
  );
};

export default NavButtons;
