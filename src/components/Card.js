import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

import imagesSrc from "../data/images";
import CardFace from "./CardFace";

const Card = ({ card, guess }) => {
  const [flipped, setFlipped] = useState(card.isChecked);

  useEffect(() => {
    if (card.isChecked || card.isGuessed) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  }, [card.isChecked, card.isGuessed]);

  return (
    <div
      className="cursor-pointer [perspective:1000px]"
      onClick={
        card.isChecked || card.isGuessed
          ? () => {}
          : () => {
              guess(card);
            }
      }
    >
      <div
        className="relative h-full w-full origin-center-right border-8 border-stone-600 text-7xl text-stone-200 duration-500 [transform-style:preserve-3d] "
        style={
          flipped ? { transform: "translateX(-100%) rotateY(-180deg)" } : {}
        }
      >
        <CardFace isFront={true} />
        <CardFace
          isFront={false}
          guessed={card.isGuessed}
        >
          <img
            className="h-full w-full object-cover"
            src={imagesSrc[card.value]}
            alt={card.value}
            style={{ backgroundColor: card.color }}
          />
        </CardFace>
      </div>
    </div>
  );
};

export default Card;
