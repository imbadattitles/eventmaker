import React from "react";
import s from "../styles/sectionAchivements.module.scss";
const SectionAchivements = () => {
  return (
    <section className={s.SectionAchivements}>
      <div className={s.Achivements}>
        <div className={s.Achivement}>
          <h5>15+</h5>
          <p className={s.Achivement__title}>Cities</p>
          <p className={s.Achivement__body}>connected</p>
        </div>
        <div className={s.Achivement}>
          <h5>50+</h5>
          <p className={s.Achivement__title}>Categories</p>
          <p className={s.Achivement__body}>of products & cervices</p>
        </div>
        <div className={s.Achivement}>
          <h5>100+</h5>
          <p className={s.Achivement__title}>Suppliers</p>
          <p className={s.Achivement__body}>offer their services</p>
        </div>
        <div className={s.Achivement}>
          <h5>700+</h5>
          <p className={s.Achivement__title}>Products & Services</p>
          <p className={s.Achivement__body}>from event suppliers</p>
        </div>
      </div>
      <div className={s.loading}>
        <a>
          <img src="./svg/appstore.svg" alt="appStore link" />
        </a>
        <a>
          <img src="./svg/googleplay.svg" alt="googlePlay link" />
        </a>
      </div>
    </section>
  );
};

export default SectionAchivements;
