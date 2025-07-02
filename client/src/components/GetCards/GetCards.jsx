import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../InfiniteMovingCards/InfiniteMovingCards";


const GetCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch cards:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading cards...</p>;

  return (
    <div >
      <InfiniteMovingCards
        items={cards}
        direction="left"
        speed="slow"
        className="mx-auto"
      />
    </div>
  );
};

export default GetCards;
