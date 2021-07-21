import React, { useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import "../../style/featureSlides.css";

const FeatureSlide = ({ title, description, index, updateActiveImage }) => {
  console.log("awfawf");
  const ref = useRef(null);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div ref={ref} className="feature-slide">
      <h3 className="feature-slide-title">{title}</h3>
      <p className="feature-slide-description">{description}</p>
    </div>
  );
};

export default FeatureSlide;
