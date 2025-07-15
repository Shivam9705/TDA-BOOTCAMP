import React from "react";

function Features() {
  return (
    <div className="features">
      <div className="feature-section">
        <div className="text">
          <h1>Enjoy on your TV</h1>
          <h2>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h2>
        </div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="TV Feature"
        />
      </div>

      <div className="feature-section reverse">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="Mobile Feature"
        />
        <div className="text">
          <h1>Download your shows to watch offline</h1>
          <h2>Save your favourites easily and always have something to watch.</h2>
        </div>
      </div>
    </div>
  );
}

export default Features;
