import React from "react";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  return (
    <article
      className={index > 10 ? "color-light color" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="color-value">#{hex}</p>
      <p className="color-percentage">{weight}%</p>
    </article>
  );
};

export default SingleColor;
