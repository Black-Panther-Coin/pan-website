import React, { useState, useEffect } from "react";

const NavButtons = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full px-8 py-4 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between">
        <div>
          <ul>
              <li>
                <a
                  className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer"
                  onClick={() => window.open("bpc.clawpaper.v1.1.pdf", "_blank")}
                  aria-current="page"
                >
                  Read ClawPaper
                </a>
                {!isMobile && (
                  <a
                  className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer"
                  onClick={() => window.open("https://bscscan.com/address/0x12a55f6aBDfE13a44eF8b29a24964e20D21E0fA5", "_blank")}
                  aria-current="page"
                >
                  View Contract
                </a>
                )}
              </li>
            </ul>
        </div>
        <div className="flex order-2 md:order-1">
          <w3m-button />
          {/* <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleCollapse}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
        </div>
        {/* <div
          className={`items-center justify-between w-full md:flex md:w-auto ${
            isMobile ? (isCollapsed ? "hidden" : "flex flex-col") : "flex"
          } ${
            isCollapsed ? "hidden" : "flex flex-col"
          } md:flex-row order-1 md:order-2`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                onClick={() => window.open("bpc.clawpaper.v1.1.pdf", "_blank")}
                aria-current="page"
              >
                Read ClawPaper
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdS8WXf6paOKK-nAn-BVN6zt4IcJ205Hipj7wIsB5G_9sW-mQ/viewform"
                target="_blank"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Presale form
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default NavButtons;
