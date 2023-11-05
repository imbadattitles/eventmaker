import React from "react";
import s from "../styles/sectionH1.module.scss";

const SectionH1 = () => {
  return (
    <section className={s.section}>
      <div className={s.sectionH1}>
        <div className={s.sectionH1__left}>
          <h1>A place where event organizers and vendors meet</h1>
          <p>
            With Eventmaker, you can explore a diverse selection of products and
            services for every type of event
          </p>
          <div className={s.sectionH1__btns}>
            <button className={s.choose}>Moscow</button>
            <button className={s.explore}>Explore</button>
          </div>
        </div>
        <div className={s.sectionH1__right}>
          <img className={s.mobile} src="./img/h1mobile.png" alt="mobileApp" />
        </div>
      </div>
      <div className={s.sectionH1__categories}>
        <a href="./">
          <img
            alt="Professionals & Artists"
            className={s.sectionH1__categoryImg}
            src="./img/h1__category1"
          />
          <div className={s.sectionH1__categoryBg} />
          <p className={s.sectionH1__categoryTitle}>Professionals & Artists</p>
        </a>
        <a href="./">
          <img
            alt="Venues"
            className={s.sectionH1__categoryImg}
            src="./img/h1__category1"
          />
          <div className={s.sectionH1__categoryBg} />
          <p className={s.sectionH1__categoryTitle}>Venues</p>
        </a>
        <a href="./">
          <img
            alt="Sound Equipment"
            className={s.sectionH1__categoryImg}
            src="./img/h1__category1"
          />
          <div className={s.sectionH1__categoryBg} />
          <p className={s.sectionH1__categoryTitle}>Sound Equipment</p>
        </a>
        <a href="./">
          <img
            alt="Light Equipment"
            className={s.sectionH1__categoryImg}
            src="./img/h1__category1"
          />
          <div className={s.sectionH1__categoryBg} />
          <p className={s.sectionH1__categoryTitle}>Light Equipment</p>
        </a>
        <a href="./">
          <img
            alt="Food & Drinks"
            className={s.sectionH1__categoryImg}
            src="./img/h1__category1"
          />
          <div className={s.sectionH1__categoryBg} />
          <p className={s.sectionH1__categoryTitle}>Food & Drinks</p>
        </a>
        <a href="./">
          <img
            alt="Decorations"
            className={s.sectionH1__categoryImg}
            src="./img/h1__category1"
          />
          <div className={s.sectionH1__categoryBg} />
          <p className={s.sectionH1__categoryTitle}>Decorations</p>
        </a>
        <a href="./">
          <img
            alt="Transport"
            className={s.sectionH1__categoryImg}
            src="./img/h1__category1"
          />
          <div className={s.sectionH1__categoryBg} />
          <p className={s.sectionH1__categoryTitle}>Transport</p>
        </a>
        <a href="./">
          <img
            alt="Entertainment Attractions"
            className={s.sectionH1__categoryImg}
            src="./img/h1__category1"
          />
          <div className={s.sectionH1__categoryBg} />
          <p className={s.sectionH1__categoryTitle}>
            Entertainment Attractions
          </p>
        </a>
        <a href="./">
          <img
            alt="Event Agencies"
            className={s.sectionH1__categoryImg}
            src="./img/h1__category1"
          />
          <div className={s.sectionH1__categoryBg} />
          <p className={s.sectionH1__categoryTitle}>Event Agencies</p>
        </a>
        <a href="./">
          <img
            alt="Other"
            className={s.sectionH1__categoryImg}
            src="./img/h1__category1"
          />
          <div className={s.sectionH1__categoryBg} />
          <p className={s.sectionH1__categoryTitle}>Other</p>
        </a>
      </div>
    </section>
  );
};

export default SectionH1;
