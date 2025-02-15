import React from "react";
import peopleLikeStyles from "@/pages/components/home/peopleLike/peopleLike.module.scss";

const PeopleLike = ({ getPeopleLike }) => {
  return (
    <section className={`${peopleLikeStyles.peopleLike} pt-10 pb-10`}>
      <div className="container mx-auto">
        <div
          className={`flex-col justify-center items-center flex pl-4 pr-4 text-center ${peopleLikeStyles.flex}`}
        >
          <h2>
            {getPeopleLike && getPeopleLike.peopleLike && getPeopleLike.status
              ? getPeopleLike.peopleLike.heading.heading
              : getPeopleLike?.error}
          </h2>
          <p>
            {getPeopleLike && getPeopleLike.peopleLike && getPeopleLike.status
              ? getPeopleLike.peopleLike.heading.para
              : getPeopleLike?.error}
          </p>
        </div>
        <div className={`flex-row flex ${peopleLikeStyles.flex}`}>
          {getPeopleLike &&
          getPeopleLike.peopleLike &&
          getPeopleLike.status &&
          getPeopleLike.peopleLike.content.length > 0 ? (
            getPeopleLike.peopleLike.content.map((item) => {
              return (
                <div
                  className={`w-1/4 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}
                  key={item.id}
                >
                  <h4>{item.title}</h4>
                  <p dangerouslySetInnerHTML={{__html: item.para}}/>
                </div>
              );
            })
          ) : (
            <p>{getPeopleLike?.error}</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default PeopleLike;
