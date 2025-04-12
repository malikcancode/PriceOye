import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { accessories } from "../Database/Accessories";
import { homeAppliances } from "../Database/HomeAppliances";
import { mobiles } from "../Database/mobiles";
import { watches } from "../Database/Watches";
import { ProductContext } from "../Context/ProductsContext";

export const AllProducts = [
  ...mobiles,
  ...watches,
  ...accessories,
  ...homeAppliances,
];

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("green");
  const product = AllProducts.find((item) => item.id.toString() === id);
  const { addtoCart, cart, removeFromCart } = useContext(ProductContext);

  const itemInCart = (id) => cart.some((item) => item.id === id);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-3/4 object-contain image-container"
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <p className="text-gray-600 text-sm">{product.description}</p>

        <p className="text-2xl font-semibold">{product.discountedPrice}</p>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: Math.round(product.rating) }, (_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <span>{product.reviewsCount} reviews</span>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition">
            Buy Now
          </button>
          {itemInCart(id) ? (
            <button
              onClick={() => removeFromCart(product.id)}
              className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => addtoCart(product)}
              className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition"
            >
              Add to basket
            </button>
          )}
        </div>

        <div className="text-sm text-gray-600 space-y-2">
          <p>
            Dispatched in <strong>5 – 7 weeks</strong>{" "}
            <span className="underline cursor-pointer">
              Why the longer lead time?
            </span>
          </p>
          <p>Home Delivery – ₹10</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
