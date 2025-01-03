import React from "react";
import aboutUsRecordStyles from "./aboutUsRecord.module.scss";

const AboutUsRecord = ({ getAboutUsRecord }) => {
  return (
    <section className={aboutUsRecordStyles.aboutUsRecord}>
      <div
        className={`container mx-auto text-center ${aboutUsRecordStyles.customContainer}`}
      >
        <div className={`flex-row flex ${aboutUsRecordStyles.flexRow}`}>
          {getAboutUsRecord?.status &&
            getAboutUsRecord.aboutUsRecord.length > 0 &&
            getAboutUsRecord.aboutUsRecord.map((item) => {
              return (
                <div className="w-1/3 p-5" key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.para}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default AboutUsRecord;
