import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Carousel() {
  const slides = [
    { id: 1, title: "Slide 1", image: "/slide1.jpg" },
    { id: 2, title: "Slide 2", image: "/slide2.jpg" },
    { id: 3, title: "Slide 3", image: "/slide3.jpg" },
    { id: 4, title: "Slide 4", image: "/slide4.jpg" },
    { id: 5, title: "Slide 5", image: "/slide5.jpg" },
    { id: 6, title: "Slide 6", image: "/slide6.jpg" },
  ];

  return (
    <Swiper
      navigation
      spaceBetween={20}
      loop={true}
      speed={600}
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
        1280: {
          slidesPerView: 1,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="flex flex-col items-center mt-3 px-2">
            <img
              loading="lazy"
              src={slide.image}
              alt={slide.title}
              className="w-full h-60 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-contain object-center rounded-md"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
