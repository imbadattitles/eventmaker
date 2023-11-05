import React from "react";
import s from "../styles/sectionCreatedWith.module.scss";
import BtnGetStarted from "./btnGetStarted";
const slides = [
  {
    title: "Wedding",
    src: "./img/WeedingSlide.png",
  },
  {
    title: "Wedding",
    src: "./img/WeedingSlide.png",
  },
  {
    title: "Birthday",
    src: "./img/WeedingSlide.png",
  },
  {
    title: "Photoshoot",
    src: "./img/WeedingSlide.png",
  },
];

const SectionCreatedWith = () => {
  return (
    <section className={s.section}>
      <p className={s.textTop}>Created with</p>
      <div className={s.slider}>
        {slides.map((slide) => (
          <div className={s.slide}>
            <img src={slide.src} alt={slide.src} />
            <p>{slide.title}</p>
          </div>
        ))}
      </div>
      <p className={s.textBtm}>Eventmaker</p>
      <BtnGetStarted />
    </section>
  );
};

export default SectionCreatedWith;
