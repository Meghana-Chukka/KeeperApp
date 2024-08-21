import React from "react";

function Footer() {
  const year = new Date().getFullYear();// to create dynamic year
  return (
    <footer> 
      <p>Copyright ⓒ {year}</p>
    </footer> //we placed this in footer html tag because we want to be placed at the bottom of the page.
  );
}

export default Footer;
