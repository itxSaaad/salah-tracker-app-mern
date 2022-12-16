import React from "react";

const Header = () => {
  return (
    <header class="text-white body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center mb-4 md:mb-0">
          <span class="ml-3 text-3xl">Salah Tracker App</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:font-bold hover:text-gray">Edit Profile</a>
        </nav>
        <button class="inline-flex items-center  border-gray-300 border py-1 px-3 focus:outline-none hover:bg-white hover:text-gray-600 rounded text-base mt-4 md:mt-0">
          Login
        </button>{" "}
        <button class="inline-flex items-center border-gray-300 border py-1 px-3 focus:outline-none hover:bg-white hover:text-gray-600 rounded text-base mt-4 md:mt-0">
          SignUp
        </button>
      </div>
    </header>
  );
};

export default Header;
