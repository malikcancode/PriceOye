import React from "react";

function BestSeller() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-xl sm:text-2xl font-semibold mb-2">
        Best Seller
      </h2>
      <h3 className="capitalize text-center text-sm sm:text-base mb-4">
        get the best prices in the town
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Big Card */}
        <div className="bg-white p-4 sm:p-6 rounded-md">
          <div className="flex flex-col justify-between items-center">
            <h2 className="text-sm sm:text-base mb-2">Tecno Camon 40</h2>
            <img
              loading="lazy"
              className="w-full sm:w-3/4 lg:w-96 h-auto object-cover"
              src="https://images.priceoye.pk/tecno-camon-40-pakistan-priceoye-9c23u-500x500.webp"
              alt="Tecno Camon 40"
            />
            <h3 className="text-sm sm:text-base mt-2">₹ 59,999</h3>
          </div>
        </div>

        {/* Right Grid of 4 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Item 1 */}
          <div className="bg-white p-4 rounded-md">
            <div className="flex flex-col justify-between items-center gap-2">
              <h2 className="text-sm sm:text-base text-center">
                Tecno Camon 40 Pro
              </h2>
              <img
                loading="lazy"
                className="w-24 sm:w-32 md:w-40 h-auto object-cover"
                src="https://images.priceoye.pk/tecno-camon-40-pro-pakistan-priceoye-srubz-270x270.webp"
                alt="Tecno Camon 40 Pro"
              />
              <h3 className="text-sm sm:text-base">₹ 65,999</h3>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-4 rounded-md">
            <div className="flex flex-col justify-between items-center gap-2">
              <h2 className="text-sm sm:text-base text-center">
                Infinix Xpad X1101B
              </h2>
              <img
                loading="lazy"
                className="w-24 sm:w-32 md:w-40 h-auto object-cover"
                src="https://images.priceoye.pk/infinix-xpad-x1101b-pakistan-priceoye-jy5r3-270x270.webp"
                alt="Infinix Xpad"
              />
              <h3 className="text-sm sm:text-base">₹ 47,999</h3>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md">
            <div className="flex flex-col justify-between items-center gap-2">
              <h2 className="text-sm sm:text-base text-center">
                YOLO Ultron Smart Watch
              </h2>
              <img
                loading="lazy"
                className="w-24 sm:w-32 md:w-40 h-auto object-cover"
                src="https://images.priceoye.pk/yolo-ultron-smart-watch-pakistan-priceoye-0jv0u-270x270.webp"
                alt="YOLO Smart Watch"
              />
              <h3 className="text-sm sm:text-base">₹ 7600</h3>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md">
            <div className="flex flex-col justify-between items-center gap-2">
              <h2 className="text-sm sm:text-base text-center">LED</h2>
              <img
                loading="lazy"
                className="w-24 sm:w-32 md:w-40 h-auto object-cover"
                src="/Homeappliances/image1 (19).webp"
                alt="LED"
              />
              <h3 className="text-sm sm:text-base">₹ 65,999</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
