import React from "react";

import "./Card.css";

function Card({ imageSource, title, text }) {
  return (
    <div className="card text-center bg-light animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-black">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-black ">
          {text}
        </p>
        
      </div>
    </div>
  );
}


export default Card;