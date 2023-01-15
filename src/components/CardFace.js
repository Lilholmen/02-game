import { FaCheck } from "react-icons/fa";

const CardFace = ({ isFront, children, guessed = false }) => {
  return (
    <div
      className="absolute flex h-full w-full items-center justify-center bg-stone-800 [backface-visibility:hidden]"
      style={!isFront ? { transform: "rotateY(180deg)" } : {}}
    >
      {guessed ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full bg-green-700 opacity-75 transition-all duration-700"></div>
          <FaCheck className="absolute" />
        </div>
      ) : null}
      {isFront ? "?" : children}
    </div>
  );
};

export default CardFace;
