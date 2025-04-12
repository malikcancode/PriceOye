import React, { useContext } from "react";
import { homeAppliances } from "../Database/HomeAppliances";
import { ProductContext } from "../Context/ProductsContext";
import { goToProductDetails } from "../utils/navigation";
import { useNavigate } from "react-router-dom";

function HomeAppliances() {
  const { cart, addtoCart, removeFromCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const itemInCart = (id) => {
    return cart.some((item) => item.id == id);
  };

  return (
    <div className="min-h-screen bg-[#59B0F9] p-8 mt-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold capitalize text-white mb-8">
          Latest TVs and home appliances
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-6">
          {homeAppliances.map((homeAppliances) => (
            <div
              key={homeAppliances.id}
              className="bg-white rounded-xl cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div
                onClick={() => goToProductDetails(navigate, homeAppliances.id)}
                className="relative h-28"
              >
                <img
                  loading="lazy"
                  src={homeAppliances.image}
                  alt={homeAppliances.title}
                  className="w-full h-[130px] object-contain p-4"
                />
                <span className="absolute top-2 right-2 bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {homeAppliances.discount}
                </span>
              </div>

              <div className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold">
                    {homeAppliances.title}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium ml-1">
                      {homeAppliances.rating}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({homeAppliances.reviewsCount})
                    </span>
                  </div>
                </div>

                <div className="flex items-end gap-3 mb-4">
                  <span className="text-2xl font-bold text-[#59B0F9]">
                    {homeAppliances.discountedPrice}
                  </span>
                  <span className="text-gray-500 line-through">
                    {homeAppliances.originalPrice}
                  </span>
                </div>

                {itemInCart(homeAppliances.id) ? (
                  <button
                    onClick={() => removeFromCart(homeAppliances.id)}
                    className="w-full bg-red-600 font-medium py-2 text-white px-4 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => addtoCart(homeAppliances)}
                    className="w-full bg-[#59B0F9] hover:bg-[#59B0F9]text-white font-medium py-2 text-white px-4 rounded-lg transition-colors"
                  >
                    Add to Basket
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeAppliances;
