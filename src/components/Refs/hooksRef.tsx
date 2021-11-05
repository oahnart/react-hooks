import React, { useEffect, useRef } from "react";
import "./style.css";

function HooksRef(): React.ReactElement {
  const hookRef: any = useRef(null);

  const scrollSmooth = () => {
    const { top } = hookRef?.current?.getBoundingClientRect();
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className="test" ref={hookRef}>
      gggg
      <div className="btn" onClick={scrollSmooth}>
        ok
      </div>
    </div>
  );
}

export default HooksRef;
