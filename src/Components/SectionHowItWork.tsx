import React, { useState } from "react";
import s from "../styles/sectionHowItWork.module.scss";

const itemsImg = [
  "./img/howDoesImg1.png",
  "./img/howDoesImg1.png",
  "./img/howDoesImg1.png",
];

const SectionHowItWork = () => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <section className={s.section}>
      <h3 className={s.section__title}>How does it work</h3>
      <div className={s.section__row}>
        <div className={s.section__right}>
          <div
            onClick={() => setActiveItem(1)}
            className={[s.item, activeItem === 1 ? s.active : ""].join(" ")}
          >
            <p className={s.index}>1</p>
            <div>
              <p className={s.item__title}>
                <span>Share</span> your preferences
              </p>
              <p className={s.item__body}>
                You can search by event type to see all recommended services, or
                you can narrow your search if you are looking for something
                specific.
              </p>
            </div>
          </div>
          <div
            onClick={() => setActiveItem(2)}
            className={[s.item, activeItem === 2 ? s.active : ""].join(" ")}
          >
            <p className={s.index}>2</p>
            <div>
              <p className={s.item__title}>
                Dive into offerings to find the{" "}
                <span>perfect fit for your event</span>
              </p>
              <p className={s.item__body}>
                We'll suggest the most suitable products and services according
                to your requirements
              </p>
            </div>
          </div>
          <div
            onClick={() => setActiveItem(3)}
            className={[s.item, activeItem === 3 ? s.active : ""].join(" ")}
          >
            <p className={s.index}>3</p>
            <div>
              <p className={s.item__title}>
                <span>Discuss details</span> with the service supplier
              </p>
              <p className={s.item__body}>
                Enjoy direct communication, and confirm your booking for the
                preferred date if you are interested
              </p>
            </div>
          </div>
        </div>
        <div className={s.section__left}>
          <img src={itemsImg[activeItem - 1]} />
          <div className={s.nav}>
            {itemsImg.map((navItem, index) => (
              <div
                className={[
                  s.navItem,
                  activeItem === index + 1 && s.activeNav,
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHowItWork;
