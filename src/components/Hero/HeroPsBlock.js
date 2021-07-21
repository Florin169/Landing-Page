import React, { useEffect } from "react";
import { gsap } from "gsap";
import ps5 from "../../img/ps5.png";
import "../../style/ps.css";

const HeroPsBlock = () => {
  useEffect(() => {
    function intro() {
      const tl = gsap.timeline();

      tl.fromTo(".hero-ps-block", { y: 200 }, { y: 0, duration: 1 });
      return tl;
    }

    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: ".hero-ps-block",
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: true,
        },
      });
      tl.to(".hero-ps-block", { scale: 0.5 }, "+=0.2");
      tl.to(
        ".hero-container",
        { backgroundColor: "black", duration: 0.25 },
        "-=0.5"
      );

      return tl;
    }

    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1100);
  }, []);

  return (
    <div className="hero-ps-block">
      <div className="hero-ps-template">
        <img src={ps5} alt="Playstation 5" />
      </div>
    </div>
  );
};

export default HeroPsBlock;
