import { FaCheck } from "react-icons/fa";

const Card = ({ card, guess }) => {
  return (
    <div
      className="flex cursor-pointer items-center justify-center bg-stone-800 text-5xl transition-colors duration-300"
      style={
        card.isChecked || card.isGuessed ? { backgroundColor: card.color } : {}
      }
      onClick={card.isGuessed ? () => {} : () => guess(card)}
    >
      {card.isGuessed ? <FaCheck /> : card.value}{" "}
      {/* for development process only */}
    </div>
  );
};

export default Card;
