import React from "react";

const Card = ({ children }) => {
  return (
    <div className="p-10 sm:w-2/5 text-white rounded-lg bg-white/10 bg-opacity-10 backdrop-blur-sm shadow-md">
      {children}
    </div>
  );
};

export default Card;
