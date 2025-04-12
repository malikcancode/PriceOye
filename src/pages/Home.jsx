import React from "react";
import Carousel from "../components/Carousel";
import TiltImage from "../components/TiltImage";
import Mobiles from "../components/Mobiles";
import Watches from "../components/Watches";
import BestSeller from "../components/BestSeller";
import HomeAppliances from "../components/HomeAppliances";
import CustomerReviews from "../components/CustomerReviews";

function Home() {
  return (
    <>
      <Carousel />
      <TiltImage />
      <Mobiles />
      <div className="mt-4">
        <img
          className="w-full h-full object-cover"
          src="/static-banner-bnpl-v6.jpg"
          alt=""
        />
      </div>
      <Watches />
      <BestSeller />
      <HomeAppliances />
      <CustomerReviews />
      <div className="flex flex-col sm:flex-row w-full bg-white items-center justify-around p-6 sm:p-8 mb-8">
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-0">
          <img
            className="object-cover w-12 h-auto mb-3"
            loading="lazy"
            src="https://static.priceoye.pk/icons/approved-feature.svg"
            alt="PTA Approved"
          />
          <h3 className="text-sm sm:text-base">PTA Approved</h3>
          <h4 className="text-xs sm:text-sm text-gray-700">Mobile Phones</h4>
        </div>
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-0">
          <img
            className="object-cover w-12 h-auto mb-3"
            loading="lazy"
            src="https://static.priceoye.pk/icons/warranty-feature.svg"
            alt="Warranty"
          />
          <h3 className="text-sm sm:text-base">1 Year</h3>
          <h4 className="text-xs sm:text-sm capitalize text-gray-700">
            Brand Warranty
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-0">
          <img
            className="object-cover w-12 h-auto mb-3"
            loading="lazy"
            src="https://static.priceoye.pk/icons/video-shooting-camera.svg"
            alt="Packaging Video"
          />
          <h3 className="text-sm sm:text-base">Packaging Video</h3>
          <h4 className="text-xs sm:text-sm capitalize text-gray-700">
            See your product
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="object-cover w-12 h-auto mb-3"
            loading="lazy"
            src="https://static.priceoye.pk/icons/shipping-feature.svg"
            alt="Fast Delivery"
          />
          <h3 className="text-sm sm:text-base">Fast Delivery</h3>
          <h4 className="text-xs sm:text-sm capitalize text-gray-700">
            All over Pakistan
          </h4>
        </div>
      </div>
    </>
  );
}

export default Home;
