import React from "react";
import { Link } from "react-router-dom";

const paymentMethods = ["https://static.priceoye.pk/images/payment_method.svg"];

function Footer() {
  return (
    <div className="bg-[#59B0FF] min-h-full w-full p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <div>
            <img
              loading="lazy"
              className="object-cover w-32 h-auto"
              src="/logo.svg"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col mt-8 text-sm gap-2 text-white">
            <Link>About</Link>
            <Link>FAQS</Link>
            <Link>Products</Link>
            <Link>Terms & Conditions</Link>
          </div>
        </div>

        <div>
          <div>
            <h2 className="text-white text-lg font-semibold">
              Customer Services
            </h2>
          </div>
          <div className="flex flex-col mt-8 text-sm gap-2 text-white">
            <Link>Help Center</Link>
            <Link>Privacy Center</Link>
            <Link>Installment Plans</Link>
            <Link>Sell on Priceoye</Link>
          </div>
        </div>

        <div>
          <div>
            <h2 className="text-white text-lg font-semibold">
              Secure Payments Methods
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {paymentMethods.map((src, index) => (
              <img
                loading="lazy"
                key={index}
                src={src}
                alt={`Payment ${index}`}
                className="h-8"
              />
            ))}
            <img
              loading="lazy"
              className="object-cover w-40 h-auto"
              src="https://static.priceoye.pk/images/google-store-badge.webp"
              alt="Google Store Badge"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
