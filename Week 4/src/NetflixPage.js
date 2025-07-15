import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./NetflixStyles.css";

function NetflixPage() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default NetflixPage;
