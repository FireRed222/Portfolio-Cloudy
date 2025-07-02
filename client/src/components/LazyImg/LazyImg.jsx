import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";

const LazyImg = ({ src, alt, className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`lazy-image-wrapper ${className}`}
      style={{ position: "relative" }}
    >
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255,255,255,0.1)", // optional
            zIndex: 1,
          }}
        >
          <Spinner />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
        {...props}
      />
    </div>
  );
};

export default LazyImg;
