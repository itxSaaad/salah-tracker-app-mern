import React from "react";

const HomeScreen = () => {
  return (
    <div class="flex justify-center items-center w-full h-screen">
      <div class="text-white text-center">
        <h1 class="text-5xl">Salah Tracker App</h1>
        <p class="text-lg text-gray-400">Best App to Track your Salah!</p>
        <a href="/progress">
          <button
            type="button"
            class="text-white border mt-2 border-gray-300 focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            View Progress <i class="fa fa-circle-check"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeScreen;
