import React from "react";
import HeroFooter from "./HeroFooter";
import HeroHeader from "./HeroHeader";
import HeroPsBlock from "./HeroPsBlock";
import HeroUsedBy from "./HeroUsedBy";

const Hero = () => {
  return (
    <div className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroPsBlock />
      </div>
      <HeroUsedBy />
      <HeroFooter />
    </div>
  );
};

export default Hero;
