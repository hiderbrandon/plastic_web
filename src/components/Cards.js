import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "Rollos de polietileno",
    image: "https://picsum.photos/200/200",
    text:""
    
  },
  {
    id: 2,
    title: "Empaques o laminas impresas",
    image: "https://picsum.photos/200/200",
    text:""

   
  },
  {
    id: 3,
    title: "Bolsas o laminas",
    image: "https://picsum.photos/200/200",
    text:""

   
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