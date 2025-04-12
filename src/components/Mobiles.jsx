import React, { useContext } from "react";
import { mobiles } from "../Database/mobiles";
import { ProductContext } from "../Context/ProductsContext";
import { useNavigate } from "react-router-dom";
import { goToProductDetails } from "../utils/navigation";

const brands = [
  {
    id: 1,
    img: "https://images.priceoye.pk/brands/samsung-az6v0.svg",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    img: "https://images.priceoye.pk/brands/infinix-gn1ip.svg",
    bgColor: "bg-gray-100",
  },
  {
    id: 3,
    img: "https://images.priceoye.pk/brands/oppo-11l8m.svg",
    bgColor: "bg-yellow-100",
  },
  {
    id: 4,
    img: "https://images.priceoye.pk/brands/tecno-1iq96.svg",
    bgColor: "bg-purple-100",
  },
  {
    id: 5,
    img: "https://images.priceoye.pk/brands/vivo-svnd6.svg",
    bgColor: "bg-pink-100",
  },
];

function Mobiles() {
  const { addtoCart, cart, removeFromCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const itemInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <div className="min-h-screen bg-[#E73B86] p-8 mt-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Latest Mobiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-6">
          {mobiles.map((mobile) => (
            <div
              key={mobile.id}
              className="bg-white rounded-xl cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div
                onClick={() => goToProductDetails(navigate, mobile.id)}
                className="relative h-28"
              >
                <img
                  loading="lazy"
                  src={mobile.image}
                  alt={mobile.title}
                  className="w-full h-[130px] object-contain p-4"
                />
                <span className="absolute top-2 right-2 bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {mobile.discount}
                </span>
              </div>

              <div className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold">{mobile.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium ml-1">
                      {mobile.rating}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({mobile.reviewsCount})
                    </span>
                  </div>
                </div>

                <div className="flex items-end gap-3 mb-4">
                  <span className="text-2xl font-bold text-pink-600">
                    {mobile.discountedPrice}
                  </span>
                  <span className="text-gray-500 line-through">
                    {mobile.originalPrice}
                  </span>
                </div>

                {itemInCart(mobile.id) ? (
                  <button
                    onClick={() => removeFromCart(mobile.id)}
                    className="w-full bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => addtoCart(mobile)}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Add to Basket
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <section>
          <h2 className="text-white font-semibold capitalize text-2xl mb-4">
            Shop by Brand
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className={`w-full h-32 rounded-lg flex items-center justify-center ${brand.bgColor}`}
              >
                <img
                  src={brand.img}
                  alt="Brand"
                  className="h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Mobiles;
