import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <div className="three-body ">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
}

export default Loading;
