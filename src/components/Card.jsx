import React from "react";
import { FaEye } from "react-icons/fa";

const Card = ({ title, description, image }) => {
  return (
    <div className="relative group bg-stone-600 shadow-lg rounded-lg overflow-hidden w-full h-60 sm:h-80 mb-6 border-b-2 border-t-2">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <FaEye className="text-white text-2xl sm:text-4xl" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 p-2 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold text-white">{title}</h3>
        <p className="text-xs sm:text-sm font-semibold text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
