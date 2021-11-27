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
    <section className=" d-flex justify-content-center align-items-center Cards">
      <div className="row container">
        {cards.map(({ title, image, id ,text}) => (
          <div className="col-md-4 col-xs-4" key={id}>
            <Card imageSource={image} title={title} text={text} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;