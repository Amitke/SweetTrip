import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import faqStyles from "./faq.module.scss";

const Faq = ({ faqsData }) => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <section className={`${faqStyles.faq} pt-10 pb-10`}>
      <div className="container mx-auto">
        <div className="flex-col justify-center items-center flex pl-4 pr-4">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={`flex-col flex`}>
          {faqsData &&
            faqsData.faq.faq.length > 0 ?
            faqsData.faq.faq.map((item) => {
              return (
                <div className="w-full pl-4 pr-4 mt-5">
                  <h3 onClick={() => handleOpen(item.id)}>
                    {item.heading} {open === item.id ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                  </h3>
                  <p className={open === item.id && faqStyles.openAccordion}>
                    {item.para}
                  </p>
                </div>
              );
            }):<p>{faqsData.error}</p>}
        </div>
      </div>
    </section>
  );
};
export default Faq;
