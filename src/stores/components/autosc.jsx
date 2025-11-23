import React, { useState, useEffect } from "react";
import "../../App.css";

const BannerSlider = () => {
  const banners = [
    "/assets/banners/ban2.webp",
    "/assets/banners/ban3.webp",
    "/assets/banners/banner1.jpg",
    "/assets/banners/ban4.webp",
     "/assets/banners/ban5.webp",
  ];

  const [index, setIndex] = useState(0);

  // Auto scroll until last image only
  useEffect(() => {
    if (index >= banners.length - 1) return; // stop auto on last banner

    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => {
    if (index < banners.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="banner-container">
      <button className="slide-btn left" onClick={prevSlide}>❮</button>

      <div
        className="banner-wrapper"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((img, i) => (
          <img key={i} src={img} alt="" className="banner-img" />
        ))}
      </div>

      <button className="slide-btn right" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default BannerSlider;
