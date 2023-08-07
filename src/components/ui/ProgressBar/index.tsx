import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Fragment, useEffect } from "react";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 500,
  showSpinner: false,
});

const ProgressBar = () => {
  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
  }, []);
  return <Fragment></Fragment>;
};

export default ProgressBar;
