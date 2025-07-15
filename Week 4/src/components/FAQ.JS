import React, { useState } from "react";

const faqs = [
  {
    q: "What is Netflix?",
    a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more."
  },
  {
    q: "How much does Netflix cost?",
    a: "Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee."
  },
  {
    q: "Where can I watch?",
    a: "Watch anywhere, anytime, on an unlimited number of devices."
  },
  {
    q: "How do I cancel?",
    a: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggle(index)}>
            {item.q}
            <span>{openIndex === index ? "✕" : "+"}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
