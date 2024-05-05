import React, { useState } from "react";

const DonationModal = ({ isOpen, onRequestClose, onDonate }) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleAmountChange = (e) => {
    // Update the donation amount as the user types
    setDonationAmount(parseFloat(e.target.value));
  };

  const handleDonateConfirm = async () => {
    try {
      // Call the onDonate function with the selected amount
      const transactionHash = await onDonate(donationAmount);
      console.log("Transaction successful. Transaction Hash:", transactionHash);
      // Close the modal
      onRequestClose();
    } catch (error) {
      console.error("Error occurred while donating:", error);
      // Handle error
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="px-4 pt-5 pb-4 sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              <h3
                className="text-lg font-medium leading-6 text-gray-900"
                id="modal-title"
              >
                Donate with Love
              </h3>
              <div className="mt-5">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  value={donationAmount}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                  className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={handleDonateConfirm}
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Donate ${donationAmount}
          </button>
          <button
            onClick={onRequestClose}
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
