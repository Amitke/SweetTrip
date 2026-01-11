import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Cookies from "js-cookie";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import { wrapper } from "./../redux/store";
import "./../utils/utils";
import "@/styles/globals.scss";

ReactGA.initialize("G-GGF5QDQRRK");
ReactGA.send("pageview");

function App({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }, []);

  useEffect(() => {
    let visitorId = Cookies.get("visitorId");
    if (!visitorId) {
      visitorId = Date.now() + Math.random().toString(36);
      Cookies.set("visitorId", visitorId, { expires: 30 });
    }
    if (visitorId && typeof window !== "undefined") {
      fetch(
        "https://script.google.com/macros/s/AKfycbx2xJM6_l_NhIqwUbqlMS4eER8Gn9-JGRnuLsb9QNEH3Inkeq4HhM3s26z_Bp14hDnRsw/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            visitorId: Cookies.get("visitorId"),
            page: window.location.pathname,
            time: new Date().toISOString(),
            userAgent: navigator.userAgent,
          }),
        }
      );
    }
  }, []);
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default wrapper.withRedux(App);
