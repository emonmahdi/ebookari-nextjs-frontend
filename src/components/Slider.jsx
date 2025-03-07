"use client"; // For Next.js App Router compatibility

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


// ✅ Correct styles for newer versions of Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://shorturl.at/EaDac",
    title: "Welcome to eBookari Shop",
    subtitle: "Build responsive sliders easily",
    buttons: [
      { text: "Get Started", link: "/get-started" },
      { text: "Learn More", link: "/about" },
    ],
  },
  {
    image: "https://shorturl.at/sNETI",
    title: "Fast & Flexible",
    subtitle: "Optimized for performance",
    buttons: [
      { text: "Explore Features", link: "/features" },
      { text: "Contact Us", link: "/contact" },
    ],
  },
  {
    image: "https://shorturl.at/XQjtd",
    title: "Easy Integration",
    subtitle: "Works seamlessly with Next.js",
    buttons: [
      { text: "Start Now", link: "/start" },
      { text: "View Docs", link: "/docs" },
    ],
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <div className="flex justify-center gap-4">
                  {slide.buttons.map((button, i) => (
                    <a
                      key={i}
                      href={button.link}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg transition"
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
