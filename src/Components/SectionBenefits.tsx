import React from "react";
import s from "../styles/sectionBenefits.module.scss";

const SectionBenefits = () => {
  return (
    <section className={s.section}>
      <h3 className={s.section__title}>
        You would <span>love Eventmaker</span> for
      </h3>
      <div className={s.benefits}>
        <div className={s.benefit}>
          <h4 className={s.benefit__title}>Diversity</h4>
          <p className={s.benefit__body}>
            With the <span>largest supplier database</span>, we definitely have
            what you desire
          </p>
        </div>
        <div className={s.benefit}>
          <h4 className={s.benefit__title}>Simplicity</h4>
          <p className={s.benefit__body}>
            Plan your event and book services all in
            <span> one convenient platform</span>
          </p>
        </div>
        <div className={s.benefit}>
          <h4 className={s.benefit__title}>Reliability</h4>
          <p className={s.benefit__body}>
            Before being listed we manually check each supplier
            <span>we manually check each supplier</span>
          </p>
        </div>
        <div className={s.benefit}>
          <h4 className={s.benefit__title}>Transparency</h4>
          <p className={s.benefit__body}>
            You receive<span>direct pricing from suppliers</span>, avoiding high
            commissions charged by agencies
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionBenefits;
