import React from "react";
import { customerreviews } from "../Database/Reviews";

const reviews = [
  {
    id: 1,
    img: "https://images.priceoye.pk/review/5485/1782479-46i9v-270x270.jpg",
  },
  {
    id: 2,
    img: "https://images.priceoye.pk/review/8227/1072372-3u1r6-270x270.jpg",
  },
  {
    id: 3,
    img: "https://images.priceoye.pk/review/7407/1783919-0zjgu-270x270.jpg",
  },
  {
    id: 4,
    img: "https://images.priceoye.pk/review/10167/1774341-p6gr1-270x270.jpg",
  },
  {
    id: 5,
    img: "https://images.priceoye.pk/review/9735/1750525-s7z1j-270x270.jpg",
  },
  {
    id: 6,
    img: "https://images.priceoye.pk/review/7908/1605529-yf2fw-270x270.jpg",
  },
];

function CustomerReviews() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-center font-semibold text-2xl mb-3">
          Customer Reviews
        </h2>
        <h3 className="text-center">
          What our Customers say about Priceoye.pk
        </h3>
        <div className="flex items-center justify-center gap-3 mt-5">
          {reviews.map((review) => (
            <div key={review.id}>
              <img
                loading="lazy"
                className="object-cover w-32 rounded-3xl h-auto"
                src={review.img}
                alt=""
              />
            </div>
          ))}
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-8">
          {customerreviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-pink-600 mb-2">
                {review.category}
              </h3>
              <p className="text-gray-800 italic mb-4">"{review.review}"</p>
              <p className="text-sm text-gray-500 text-right">
                – {review.name}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default CustomerReviews;
