import { FaCheck } from "react-icons/fa";

const Card = ({ card, guess }) => {
  return (
    <div
      className="flex cursor-pointer items-center justify-center bg-stone-800 text-5xl transition-colors duration-300"
      style={
        card.isChecked || card.isGuessed ? { backgroundColor: card.color } : {}
      }
      onClick={card.isChecked ? () => {} : () => guess(card)}
    >
      {card.isGuessed ? <FaCheck /> : card.value}
    </div>
  );
};

export default Card;
