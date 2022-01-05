// This component is what everything will be passed to
import React from "react";
// Importing everything we need to build our react portfolio.
import Header from "./Header";
import Project from "./Project";
import Footer from "./Footer";

export default function PortfolioContainer() {
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}
