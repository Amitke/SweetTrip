import React from "react";
import footerBottomStyles from "./footerBottom.module.scss";


const FooterBottom = () => {
  return (
    <section className={footerBottomStyles.footerBottom}>
      <div className="container mx-auto">
        <div className={`flex-row flex ${footerBottomStyles.flexRow}`}>
          <div className='w-full pl-4 pr-4'>
            <p>
              Copyright © 2025. Sweet Trip. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FooterBottom;
