import "./TitleCard.css";
import cards_data from "../assets/cards/cards_data";

import { useRef } from "react";
import { useEffect } from "react";

export const TitleCard = () => {
  const cardsRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="titleCards">
      <h2>Popuar on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TitleCard;
