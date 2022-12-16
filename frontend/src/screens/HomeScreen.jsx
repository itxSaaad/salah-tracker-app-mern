import React from "react";

const HomeScreen = () => {
  return (
    <div className="text-white justify-between text-center my-80">
      <h1 className="text-5xl">Salah Tracker App</h1>
      <p className="text-lg text-gray-400">Best App to Track your Salah!</p>
      <button
        type="button"
        className="text-white border mt-2 border-gray-300 focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        View Progress
      </button>
    </div>
  );
};

export default HomeScreen;
