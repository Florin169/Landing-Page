import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import FeatureSlide from "./FeatureSlide";
import { featureSlides } from "../../data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RenderImages = ({ activeFeatureIndex }) => {
  return featureSlides.map(({ imageUrl }, index) => (
    <img
      className={cn({ "as-primary": activeFeatureIndex === index })}
      key={imageUrl}
      style={{ backgroundImage: `url(${imageUrl})` }}
      alt="image"
    />
  ));
};

const FeatureSlides = () => {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);

  const featureSlideRef = useRef(null);
  const featureSlideRefRight = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlideRefRight.current,
          start: "top top",
          end: () => `+=${featureSlideRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });

      return tl;
    }

    const master = gsap.timeline();
    master.add(stopTrigger());
  }, []);

  return (
    <div ref={featureSlideRef} className="feature-slides-container">
      <div className="feature-slides-left">
        {featureSlides.map((feature, index) => {
          return (
            <FeatureSlide
              updateActiveImage={setFeatureIndex}
              key={feature.imageUrl}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          );
        })}
      </div>
      <div ref={featureSlideRefRight} className="feature-slides-right">
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
  );
};

export default FeatureSlides;
