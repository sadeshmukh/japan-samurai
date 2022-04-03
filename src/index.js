import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./PageList";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import "./index.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <div>
    <Router>
      <ScrollToTop></ScrollToTop>
      <Header />
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/beliefs" element={<Pages.Beliefs />} />
        <Route path="/battle" element={<Pages.Battle />} />
        <Route path="/clothing" element={<Pages.Clothing />} />
        <Route path="/education" element={<Pages.Education />} />
      </Routes>

      <Footer />
    </Router>
  </div>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
