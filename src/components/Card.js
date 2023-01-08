import { FaCheck } from "react-icons/fa";

const Card = ({ card, guess }) => {
  return (
    <div
      className="m-3 flex h-1/5 basis-1/5 cursor-pointer items-center justify-center bg-neutral-800 text-5xl text-neutral-200 transition-colors duration-300"
      style={
        card.isChecked || card.isGuessed ? { backgroundColor: card.color } : {}
      }
      onClick={card.isChecked ? () => {} : () => guess(card.id)}
    >
      {card.isGuessed ? <FaCheck /> : card.value}
    </div>
  );
};

export default Card;
