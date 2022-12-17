import React from "react";

import Card from "../components/Card";

const ProgressScreen = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Card>
        <div>
          <h1 className="text-3xl">Your Progress</h1>
          <p className="mt-2 text-gray-400">
            Praying without any Break since day(s)!
          </p>
        </div>
        <div className="mt-4">
          <div className="relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6 space-y-4">
            <div className="group relative flex justify-between rounded-xl border-solid border-2 border-white">
              <div className="flex items-center relative space-y-1 p-4">
                <h4 className="w-full text-lg">Fajar</h4>
              </div>
            </div>
            <div className="group relative flex justify-between rounded-xl border-solid border-2 border-white">
              <div className="flex items-center relative space-y-1 p-4">
                <h4 className="text-lg">Dhuhr</h4>
              </div>
            </div>
            <div className="group relative flex justify-between rounded-xl border-solid border-2 border-white">
              <div className="flex items-center relative space-y-1 p-4">
                <h4 className="text-lg">Asar</h4>
              </div>
            </div>
            <div className="group relative flex justify-between rounded-xl border-solid border-2 border-white">
              <div className="flex items-center relative space-y-1 p-4">
                <h4 className="text-lg">Maghrib</h4>
              </div>
            </div>
            <div className="group relative flex justify-between rounded-xl border-solid border-2 border-white">
              <div className="flex items-center relative space-y-1 p-4">
                <h4 className="text-lg">Esha</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative flex justify-between items-center mt-2">
          <h1 className="text-lg">Have you offered all Prayers Today?</h1>
          <div className="flex flex-row">
            <button
              id="answer_yes"
              className="flex p-2 m-1 border-2 rounded hover:text-white text-green-400 border-green-400 hover:bg-green-400"
            >
              <span>&#10003;</span>
            </button>

            <button
              id="answer_no"
              className="flex p-2 m-1 border-2 rounded hover:text-white text-red-400 border-red-400 hover:bg-red-400"
            >
              <span>&#10007;</span>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProgressScreen;
