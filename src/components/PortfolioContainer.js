// This component is what everything will be passed to
import React, { useState } from "react";
// Importing everything we need to build our react portfolio.
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  // Setting the default state of currentPage as 'Home'
  const [currentPage, setCurrentPage] = useState("Home");

  // This function returns a page based on the current page.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  // This function changes the state of the current page to whatever page you pass in.
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Header will go here */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      {/* Footer will go here */}
    </div>
  );
}
