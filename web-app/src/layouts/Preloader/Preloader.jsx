import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Power3 } from "gsap/src";
import './index.css';

const Preloader = () => {
  let id = useRef(null);
  let tl = useRef(null);

  // best practice for writing gsap in react
  useLayoutEffect(() => {
    const headlineFirst = id.children[0].children[0];
    console.log(headlineFirst);

    const ctx = gsap.context(() => {
      // adding timelines
      tl.current = gsap
        .timeline()
        .to(id, 0, { css: { visibility: "visible" } })
        .from(
          [headlineFirst.children],
          1,
          {
            y: 0,
            ease: Power3.easeOut,
            opacity:0
          },
          0.15
        );
    }, id);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero" ref={(el) => (id = el)}>
      <h1>
        <div className="text-reveal-line">
          <div className="text-reveal-inner">Eathub</div>
        </div>
      </h1>
    </div>
  );
};

export default Preloader;
