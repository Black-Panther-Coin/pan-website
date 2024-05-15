import React, { useState } from "react";
import bgImage from "../../assets/images/bg7.png";
import DonationPopup from "../Popups/donationPopup";

const Footer = () => {
  // Mock donation data
  const donationTarget = 100000;
  const currentDonation = 0;
  const donationProgress = (currentDonation / donationTarget) * 100;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <footer className="bg-gray-800 py-12 px-4 md:px-8 w-full relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      />
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center">
        {/* Donate Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={openModal}
            className="bg-yellow-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-yellow-600 text-lg"
          >
            Donate Now
          </button>
        </div>
        {/* Donation Target and Progress Bar */}
        <div className="mt-6 text-center">
          <p className="text-white mb-2 text-lg">
            Donation Target: ${donationTarget}
          </p>
          {/* <div className="bg-gray-600 h-10 rounded-full overflow-hidden">
            <div
              className="bg-yellow-500 h-full rounded-full"
              style={{ width: `${donationProgress}%` }}
            />
          </div> */}
          {/* <p className="text-white mt-2 text-lg">
            Current amount donated: ${currentDonation}
          </p> */}
        </div>
        {/* Visit Foundation Website Link */}
        <a
          href="http://blackpanthertkn.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 mt-8 text-lg hover:underline"
        >
          Visit Black Panther Foundation Website
        </a>
        <DonationPopup isOpen={modalIsOpen} onClose={closeModal} />
        {/* Footer Bottom Section */}
        <div className="text-center mt-8 items-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Black Panther Coin. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
