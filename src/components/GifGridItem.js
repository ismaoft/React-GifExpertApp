import React from "react";

export const GifGridItem = (props) => {
  return (
    <div className="animate__animated animate__fadeIn animate__delay-1s">
      <img src={props.url} alt={props.title} />
      <p>{props.title}</p>
    </div>
  );
};
