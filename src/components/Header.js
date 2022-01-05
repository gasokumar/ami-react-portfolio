// Application has a single `Header` component that appears on multiple pages, with a `Navigation` component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.
// This component will appear on all pages.
import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function Header() {
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
      <div style="display-4"> Ami Asokumar </div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}
