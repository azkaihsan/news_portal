import React from 'react';
import SimpleHeaderNoRouter from "./SimpleHeaderNoRouter";
import Footer from "./Footer";
import HomePageNoRouter from "./HomePageNoRouter";

function SimpleNewsPortal() {
  return (
    <div className="App">
      <SimpleHeaderNoRouter />
      <HomePageNoRouter />
      <Footer />
    </div>
  );
}

export default SimpleNewsPortal;
