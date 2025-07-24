import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import faqStyles from "./faq.module.scss";

const Faq = ({ faqsData,faqsError }) => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <section className={`${faqStyles.faq} pt-10 pb-10`}>
      <div className="container mx-auto">
        <div className="flex-col justify-center items-center flex pl-4 pr-4">
          <h2>FAQs – Sweet Trip Tour Operator in Varanasi Asked Questions</h2>
        </div>
        <div className={`flex-col flex`}>
          {faqsData &&
            faqsData.length > 0 ?
            faqsData.map((item) => {
              return (
                <div className="w-full pl-4 pr-4 mt-5" key={item.id}>
                  <h3 onClick={() => handleOpen(item.id)}>
                    {item.heading} {open === item.id ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                  </h3>
                  <p className={open === item.id && faqStyles.openAccordion}>
                    {item.para}
                  </p>
                </div>
              );
            }):<p>{faqsError}</p>}
        </div>
      </div>
    </section>
  );
};
export default Faq;
