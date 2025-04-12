import React, { useContext } from "react";
import { accessories } from "../Database/Accessories";
import { ProductContext } from "../Context/ProductsContext";
import { goToProductDetails } from "../utils/navigation";
import { useNavigate } from "react-router-dom";

function Accessories() {
  const { cart, addtoCart, removeFromCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const itemInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <div className="min-h-screen bg-[#EA7227] mt-8 mb-4 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">
          Latest Smart Accessories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((accessorie) => (
            <div
              className="bg-white rounded-xl cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              key={accessorie.id}
            >
              <div
                onClick={() => goToProductDetails(navigate, accessorie.id)}
                className="relative h-28"
              >
                <img
                  loading="lazy"
                  className="w-full h-[130px] object-contain p-4"
                  src={accessorie.image}
                  alt={accessorie.title}
                />
                <span className="absolute top-2 right-2 bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {accessorie.discount}
                </span>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold">{accessorie.title}</h3>{" "}
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium ml-1">
                      {accessorie.rating}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({accessorie.reviewsCount})
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-2xl font-bold text-[#EA7227]">
                    {accessorie.discountedPrice}
                  </span>
                  <span className="text-gray-500 line-through">
                    {accessorie.originalPrice}
                  </span>
                </div>

                {itemInCart(accessorie.id) ? (
                  <button
                    onClick={() => removeFromCart(accessorie.id)}
                    className="w-full bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => addtoCart(accessorie)}
                    className="w-full bg-[#EA7227] hover:bg-[#EA7227] text-white font-medium py-2 px-4 rounded-lg transition-colors"
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

export default Accessories;
