import React from "react";
import "animate.css";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__bounceIn">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
