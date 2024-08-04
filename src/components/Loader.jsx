import React from "react";
import "../loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <svg className="loader-svg" viewBox="0 0 50 50">
        <circle
          className="loader-path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};
export default Loader;
