import React from "react";

function TiltImage() {
  return (
    <div className="mt-4 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 perspective-container">
      <img
        src="/slide1.jpg"
        alt="Tilted"
        className="w-full h-48 perspective-image sm:h-60 md:h-72 lg:h-80 xl:h-96 rounded-3xl object-cover object-center"
      />
    </div>
  );
}

export default TiltImage;
