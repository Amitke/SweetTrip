// import { combineReducers } from "redux";
import { combineReducers } from '@reduxjs/toolkit';
import headerMenuReducer from "./menu/headerMenu";
import footerMenuReducer from "./menu/footerMenu";
import socialReducer from './social';
import contactReducer from './contact';
import sectionHeaderReducer from './sectionHeader';
import aboutUsRecordReducer from './aboutUsRecord';
import googleReviewsReducer from './googleReviews';
import rentalVehicleReducer from './rentalVehicle';
import promoReducer from './promo';
import peopleLikeReducer from './peopleLike';
import faqReducer from "./faq";
import popularRoutesReducer from "./popularRoutes";
import topSightSeeingReducer from "./topSightSeeing";

const rootReducer = combineReducers({
  headerMenu: headerMenuReducer,
  footerMenu: footerMenuReducer,
  socialData: socialReducer,
  contactData: contactReducer,
  sectionHeader: sectionHeaderReducer,
  aboutUsRecord: aboutUsRecordReducer,
  googleReviews: googleReviewsReducer,
  rentalVehicle: rentalVehicleReducer,
  promo: promoReducer,
  peopleLike: peopleLikeReducer,
  faq:faqReducer,
  popularRoutes:popularRoutesReducer,
  topSightSeeing: topSightSeeingReducer,
});

export default rootReducer;
