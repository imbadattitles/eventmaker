import React from "react";
import s from "../styles/sectionAreYouABusiness.module.scss";

const SectionAreYouABusiness = () => {
  return (
    <section className={s.section}>
      <div>
        <h3 className={s.section__title}>
          Are you a business that offers event services and resources?
        </h3>
        <p className={s.section__text}>
          Get new clients by showcasing your products and services on our
          platform.
        </p>
        <button className={s.btn}>Know more</button>
      </div>
      <img className={s.img} src="./img/SectionAreYouABusinessImg.png" />
    </section>
  );
};

export default SectionAreYouABusiness;
