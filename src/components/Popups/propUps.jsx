// Popup.js
import React from "react";
import { useSpring, animated } from "react-spring";

const propUps = ({ onClose }) => {
  const popupAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000, delay: 1000 },
  });

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
      <animated.div
        className="p-6 rounded-md shadow-lg max-w-xs md:max-w-sm text-center bg-lightbaige"
        style={popupAnimation}
      >
        <p className="text-md md:text-lg font-semibold text-black">
          Together we are dedicated to raising awareness about sickle cell
          anemia & other illnesses disproportionately affecting people of
          African descent. Click the Donate Button to join in our mission to
          launch a powerful project that will help us achieve our goals
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Got it!
        </button>
      </animated.div>
    </div>
  );
};

export default propUps;
