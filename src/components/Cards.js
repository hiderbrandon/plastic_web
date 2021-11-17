import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "item1",
    image: "https://picsum.photos/200/200",
    text:"description for item 1"
    
  },
  {
    id: 2,
    title: "item2",
    image: "https://picsum.photos/200/200",
    text:"description for item 2"

   
  },
  {
    id: 3,
    title: "item2",
    image: "https://picsum.photos/200/200",
    text:"description for item 3"

   
  },

];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        {cards.map(({ title, image, id ,text}) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;