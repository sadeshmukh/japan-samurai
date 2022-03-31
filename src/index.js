import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./PageList";
import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";

ReactDOM.render(
  <div>
    <Router>
      <Header />
      <div className="pt-3">
        TODO: finalize px-5 (if full-width sections not required)
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/beliefs" element={<Pages.Beliefs />}></Route>
          <Route path="/weapons" element={<Pages.Weapons />}></Route>
          <Route path="/clothing" element={<Pages.Clothing />}></Route>
        </Routes>
      </div>

      <Footer />
    </Router>
  </div>,
  document.getElementById("root")
);
