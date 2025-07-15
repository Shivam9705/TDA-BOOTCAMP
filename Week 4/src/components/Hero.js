import React from "react";

function Hero() {
  return (
    <div className="main-content">
      <h1>Unlimited movies, TV shows and more</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="email-form">
        <input type="email" placeholder="Email address" />
        <button>Get Started &gt;</button>
      </div>
    </div>
  );
}

export default Hero;
