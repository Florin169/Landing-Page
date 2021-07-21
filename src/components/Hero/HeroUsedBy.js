import React from "react";
import "../../style/usedby.css";

const HeroUsedBy = () => {
  return (
    <div className="hero-usedby">
      <div className="container-right">
        <img
          src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-ray-trace-white-icon-01-en-21aug20?$1600px--t$"
          alt="ray tracing"
        />
        <p>
          Immerse yourself in worlds with a new level of realism as rays of
          light are individually simulated, creating true-to-life shadows and
          reflections in supported PS5 games.
        </p>
      </div>
      <div className="container-left">
        <img
          src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-120fps-white-icon-01-en-21aug20?$1600px--t$"
          alt="frames per seconds"
        />
        <p>
          Enjoy smooth and fluid high frame rate gameplay at up to 120fps for
          compatible games, with support for 120Hz output on 4K displays.
        </p>
      </div>
    </div>
  );
};

export default HeroUsedBy;
