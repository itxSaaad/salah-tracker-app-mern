import React from "react";

const Header = () => {
  return (
    <header className="text-white body-font">
      <nav className="container mx-auto flex items-center justify-between flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <span className="ml-3 text-3xl">Salah Tracker App</span>
        </a>
        <div>
          <a href="/login" className="inline-block">
            <button
              type="button"
              className="text-white border mt-2 border-gray-300 focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:ring-4 focus:ring-gray-200 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Login <i className="fa fa-arrow-right-to-bracket"></i>
            </button>
          </a>
          <a href="/register" className="inline-block">
            <button
              type="button"
              className="text-white border mt-2 border-gray-300 focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:ring-4 focus:ring-gray-200 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              SignUp <i className="fa fa-user-plus"></i>
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
