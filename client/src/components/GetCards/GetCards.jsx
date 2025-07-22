import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../InfiniteMovingCards/InfiniteMovingCards";


const GetCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://portfolio-cloudy.onrender.com/cards")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load cards");
        return res.json();
      })
      .then((data) => {
        setCards(data);
        setError(false);
      })
      .catch((err) => {
        console.error("Failed to fetch cards:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading cards...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">
        ⚠️ Backend is currently unavailable. Please try again shortly.
      </p>
    );

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
