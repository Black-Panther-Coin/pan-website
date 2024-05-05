import React from "react";
import bgImage from "../../assets/images/bg7.png";
import Item1Image from "../../assets/images/doge-coin-logo-1024x1024.png";
import Item2Image from "../../assets/images/shiba-inu-coin-logo.png";
import Item3Image from "../../assets/images/pepe-coin-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 px-4 md:px-8 w-full relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      />
      <div className="container mx-auto relative z-10 flex flex-col items-start">
        <div className="justify-between items-center">
          {/* Dogecoin  Section */}
          <div className="flex items-center mb-8">
            <img src={Item1Image} alt="Dogecoin" className="w-20 md:w-40 h-auto mr-4" />
            <div>
              <h1 onClick={() => window.open("https://edition.cnn.com/2021/05/14/investing/crypto-shiba-inu-brothers-millionaires/index.html", "_blank")} className="text-lg md:text-3xl font-bold text-white mb-2 cursor-pointer">
                From Jobless to Millionaire!
              </h1>
            </div>
          </div>

          {/* Shiba Section */}
          <div className="flex items-center mb-8">
            <img src={Item2Image} alt="Shiba " className="w-20 md:w-40 h-auto mr-4" />
            <div>
              <h1 onClick={() => window.open("https://news.bitcoin.com/dogecoin-investor-millionaire-inspired-by-elon-musk/", "_blank")} className="text-lg md:text-3xl font-bold text-white mb-2 cursor-pointer">
                Dogecoin Millionaire in 2 Months
              </h1>
            </div>
          </div>

          {/* Pepe Section */}
          <div className="flex items-center mb-8">
            <img src={Item3Image} alt="Pepe" className="w-20 md:w-40 h-auto mr-4" />
            <div>
              <h1 onClick={() => window.open("https://www.analyticsinsight.net/a-man-who-turned-27-into-1-million-with-a-pepe-coin-makes-a-massive-investment-into-digitoads/", "_blank")} className="text-lg md:text-3xl font-bold text-white mb-2 cursor-pointer">
                $27 Turns Into 1Million
              </h1>
            </div>
          </div>
        </div>
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
