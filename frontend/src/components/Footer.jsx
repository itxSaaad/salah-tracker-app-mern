import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2022 Salah Tracker App —
            <a
              href="https://znap.link/itxSaaad"
              rel="noopener noreferrer"
              className="text-gray-500 ml-1"
              target="_blank"
            >
              @itxSaaad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
