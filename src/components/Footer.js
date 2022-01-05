import React from "react";

// const styles = {
//   buttonFont: {
//     fontFamily: "Ubuntu, sans-serif",
//   },
// };

export default function Footer() {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h6>
          <strong>
            &copy; {new Date().getFullYear()} - Made by Ami Asokumar
          </strong>
        </h6>
        <h6>Powered by React, Styled by Bootstrap</h6>
      </div>
    </footer>
  );
}
