import React, { useEffect } from "react";
import Hero from "./components/Hero/index.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureSlides from "./components/FeaturedSlides/index.js";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <div>
      <Hero />
      <FeatureSlides />
    </div>
  );
};

export default App;
