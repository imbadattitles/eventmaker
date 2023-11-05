import React, { useState } from "react";
import s from "../styles/SectionYouCanEasily.module.scss";
import BtnGetStarted from "./btnGetStarted";

const items = [
  {
    text: "Party",
    src: "./img/party.png",
  },
  {
    text: "Birthday",
    src: "./img/party.png",
  },
  {
    text: "Wedding",
    src: "./img/party.png",
  },
  {
    text: "Photo shoot",
    src: "./img/party.png",
  },
  {
    text: "Lecture",
    src: "./img/party.png",
  },
  {
    text: "Masterclass",
    src: "./img/party.png",
  },
  {
    text: "Corporate event",
    src: "./img/party.png",
  },
  {
    text: "Pop-up",
    src: "./img/party.png",
  },
  {
    text: "Gala",
    src: "./img/party.png",
  },
  {
    text: "Meeting",
    src: "./img/party.png",
  },
  {
    text: "Video shoot",
    src: "./img/party.png",
  },
  {
    text: "Exhibition",
    src: "./img/party.png",
  },
  {
    text: "Festival",
    src: "./img/party.png",
  },
  {
    text: "Live music",
    src: "./img/party.png",
  },
  {
    text: "Concert",
    src: "./img/party.png",
  },
  {
    text: "Workshop",
    src: "./img/party.png",
  },
  {
    text: "Party",
    src: "./img/party.png",
  },
  {
    text: "Dinner",
    src: "./img/party.png",
  },
  {
    text: "Performance",
    src: "./img/party.png",
  },
  {
    text: "Retreat",
    src: "./img/party.png",
  },
];

const SectionYouCanEasily = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <section>
      <div className={s.section}>
        <div className={s.section__left}>
          <h2>
            You can easily access various suppliers to create a{" "}
            <span>unique and unforgettable event.</span>
          </h2>
          <ul>
            {items.map((item, index) => (
              <li
                className={index === activeItem ? s.activeItem : ""}
                onClick={() => setActiveItem(index)}
              >
                {item.text}
              </li>
            ))}
          </ul>
          <BtnGetStarted />
        </div>
        <img
          src={`${items[activeItem].src}`}
          alt={`${items[activeItem].text}`}
        />
      </div>
    </section>
  );
};

export default SectionYouCanEasily;
