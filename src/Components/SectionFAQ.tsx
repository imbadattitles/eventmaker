import React, { useState } from "react";
import s from "../styles/sectionFAQ.module.scss";
type question = {
  id: number;
  question: string;
  answer: string;
};
const questions: question[] = [
  {
    id: 1,
    question: "What is Eventmaker?",
    answer: "dolor sit amet",
  },
  {
    id: 2,
    question: "How much does it cost for me as a client?",
    answer: "dolor sit amet",
  },
  {
    id: 3,
    question: "What is the platform roadmap?",
    answer: "dolor sit amet",
  },
  {
    id: 4,
    question: "Other questions?",
    answer: "dolor sit amet",
  },
];
const SectionFAQ = () => {
  const [activeItem, setActiveItem] = useState<null | question>(null);
  return (
    <section className={s.section}>
      <h3 className={s.section__title}>FAQ</h3>
      <div className={s.FAQ}>
        {questions.map((question) => (
          <div onClick={() => setActiveItem(question)} className={s.FAQ__item}>
            <div className={s.FAQ__row}>
              <p className={s.question}>{question.question}</p>
              <div
                className={[
                  s.FAQ__arrow,
                  activeItem === question && s.arrow_active,
                ].join(" ")}
              />
            </div>
            {activeItem === question && (
              <p className={s.answer}>{question.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFAQ;
