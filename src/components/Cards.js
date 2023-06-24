import React from "react";
import Card from "./Card";
import {myImages} from "../images";
function Cards() {
  return (
    <section className=" d-flex justify-content-center align-items-center Cards">
      <div className="row container">
        {myImages.products.map(({ title, image, id ,text}) => (
          <div className="col-md-4 col-xs-4" key={id}>
            <Card imageSource={image} title={title} text={text} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;