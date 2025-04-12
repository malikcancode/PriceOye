import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ProductContext } from "../Context/ProductsContext";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(ProductContext);

  const subtotal = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(item.priceInINR.replace(/[^0-9.]/g, ""));
    return acc + numericPrice * item.quantity;
  }, 0);

  return (
    <div className="w-full min-h-screen px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {" "}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-semibold mb-8">Your Cart</h2>{" "}
          <div className="hidden sm:flex justify-between text-gray-500 font-semibold px-4 mb-4">
            <div className="w-1/3">Product</div>
            <div className="w-1/6 text-center">Price</div>
            <div className="w-1/6 text-center">Quantity</div>
            <div className="w-1/12 text-center">Action</div>
          </div>
          <div className="space-y-6 h-full">
            {cart.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <p className="text-red-600 text-center text-2xl">
                  Ooops! Your cart is empty.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 rounded shadow-sm gap-4"
                >
                  {" "}
                  <div className="flex items-center gap-4 w-full sm:w-1/3">
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </div>
                  <div className="flex sm:hidden flex-col gap-2 w-full">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.color}</p>
                    </div>
                    <p className="text-gray-700 font-medium">
                      {item.priceInINR}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        Quantity
                      </span>
                      <div className="flex items-center gap-2 border px-3 py-1 rounded">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          disabled={item.quantity === 1}
                          className="text-gray-700 hover:text-red-500 disabled:opacity-50"
                        >
                          <FaMinus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="text-gray-700 hover:text-green-600"
                        >
                          <FaPlus size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        Remove
                      </span>
                      <button onClick={() => removeFromCart(item.id)}>
                        <MdDelete className="text-2xl text-gray-500 hover:text-red-500" />
                      </button>
                    </div>
                  </div>
                  <div className="hidden sm:flex w-full sm:w-1/6 justify-center">
                    <p className="text-gray-700 font-medium">
                      {item.priceInINR}
                    </p>
                  </div>
                  <div className="hidden sm:flex w-full sm:w-1/6 justify-center">
                    <div className="flex items-center gap-2 border px-3 py-1 rounded">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                        className="text-gray-700 hover:text-red-500 disabled:opacity-50"
                      >
                        <FaMinus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="text-gray-700 hover:text-green-600"
                      >
                        <FaPlus size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="hidden sm:flex w-full sm:w-1/12 justify-center">
                    <button onClick={() => removeFromCart(item.id)}>
                      <MdDelete className="text-3xl text-gray-500 hover:text-red-500" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-white p-6 rounded shadow-md h-fit">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
