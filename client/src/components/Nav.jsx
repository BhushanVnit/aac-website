import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className=" bg-black shadow text-xl">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
        <div>
          <div className="flex items-center justify-between   md:block">
            <a href=" ">
              <img className="w-16 inline" src="../logo.png" alt="logo" />
              <span className="px-2 text-white text-sm">Ashlesha Astronomy Club</span>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-blue-600 text-sm">
                <a href=" ">Home</a>
              </li>
              <li className="text-white hover:text-blue-600 text-sm">
                <a href=" ">Blog</a>
              </li>
              <li className="text-white hover:text-blue-600 text-sm">
                <a href=" ">About US</a>
              </li>
              <li className="text-white hover:text-blue-600 text-sm">
                <a href=" ">Contact US</a>
              </li>
              <li className="text-white hover:text-blue-600 text-sm flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
                <a href=" " className="mx-2">Admin</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}