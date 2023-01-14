import { FaCheck } from "react-icons/fa";

import imagesSrc from "../data/images";

/* const Card = ({ card, guess }) => {
  return (
    <div
      className="flex cursor-pointer items-center justify-center bg-stone-800 text-5xl transition-colors duration-300"
      style={
        card.isChecked || card.isGuessed ? { backgroundColor: card.color } : {}
      }
      onClick={card.isGuessed ? () => {} : () => guess(card)}
    >
      {card.isGuessed ? <FaCheck /> : card.value}{" "}
    </div>
  );
}; */

const Card = ({ card, guess }) => {
  return (
    <div className="group cursor-pointer overflow-hidden border-8 border-stone-500 [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-300 [transform-style:preserve-3d] group-active:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={imagesSrc[card.value]}
            alt={card.value}
            style={{ backgroundColor: card.color }}
          />
        </div>
        <div className="absolute inset-0 bg-stone-400 [backface-visibility:hidden]"></div>
      </div>
    </div>
  );
};

export default Card;
