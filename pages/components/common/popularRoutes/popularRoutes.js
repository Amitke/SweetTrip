import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularRoutesData } from "./../../../api/common/popularRoutes";
import popularRoutesStyles from "./popularRoutes.module.scss";

const popularRoutes = () => {
  const dispatch = useDispatch();
  const getPopularRoutes = useSelector((state) => state.popularRoutes);
  useEffect(() => {
    dispatch(getPopularRoutesData());
  }, []);
  return (
    <section className={`${popularRoutesStyles.popularRoutes} pt-10 pb-10`}>
      <div className="container mx-auto">
        <div className="flex-col justify-center items-center flex pl-4 pr-4">
          <h2>Most Popular Routes</h2>
        </div>
        <div className={`flex-col flex`}>
          <div className="w-full pl-4 pr-4 mt-5">
            <ul>
              {getPopularRoutes && getPopularRoutes.popularRoutes?.length > 0 ? (
                getPopularRoutes.popularRoutes.map((item) => {
                  return <li key={item.id}>{item.linkText}</li>;
                })
              ) : (
                <li>{getPopularRoutes.popularRoutes?.error}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default popularRoutes;
