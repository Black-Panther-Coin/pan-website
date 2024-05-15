import React from "react";
import toast from "react-hot-toast";
import pantherImage from "../../assets/qr-code-coin.png";

const DonationPopup = ({ isOpen, onClose }) => {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText("0x896C7379cfDA3F3c2D0017f3622b256aC2743ae3");
    toast.success("Wallet address copied to clipboard!");
  };

  const handleDonate = () => {
    toast.success("Donation successful!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-xs w-full md:max-w-sm">
        <h2 className="text-md md:text-lg font-semibold mb-4 text-black text-center">
          Scan or copy wallet address to make your donation
        </h2>
        <div className="text-center mb-4">
          <div className="bg-gold rounded-lg inline-block p-2 md:p-4 flex justify-center">
            <p className="text-yellow-600 font-bold text-xs md:text-sm">
              0x896C7379cfDA3F3c2D0017f3622b256aC2743ae3
            </p>
          </div>
        </div>

        <img
          src={pantherImage}
          alt="Donation QR Code"
          className="mt-4 w-24 h-auto mx-auto"
        />
        <h4 className="text-black font-bold w-24 text-center h-auto mx-auto">
          BNB
        </h4>
        <div className="text-center mt-4">
          <button
            onClick={handleCopyAddress}
            className="bg-yellow-500 text-black px-3 py-2 rounded-lg font-bold text-sm mr-2"
          >
            Copy wallet address
          </button>
          <button
            className="bg-gray-500 text-white px-3 py-2 rounded-lg text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
        <p className="text-gray-500 text-xs mt-4 text-center">
          Your contribution supports our cause. Thank you!
        </p>
      </div>
    </div>
  );
};

export default DonationPopup;
