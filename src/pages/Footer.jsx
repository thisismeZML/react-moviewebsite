import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-300 font-pirmaryFont border-t border-gray-700 mt-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-300">About Us</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">Carrers</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">Contact</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  Contact Support
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">Help Center</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  Supported Devices
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  Activate Your Device
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  Accessibility
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              PARTNERS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  Advertise with Us
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  Partner with Us
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              GET THE APPS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-300">iOS</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">Android</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">Roku</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">Amazon Fire</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              PRESS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  Press Releases
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  MovieHub in news
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">
                  Your Privacy Choices
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-300">Cookies</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Subscribe
            </button>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-[#161324]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 MovieHub —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @zinminlatt
            </a>
          </p>
          {/* <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Enamel pin tousled raclette tacos irony
          </span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
