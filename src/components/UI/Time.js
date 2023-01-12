const Time = ({ value }) => {
  return (
    <>
      <span>{("0" + Math.floor(+value / 60)).slice(-2)}</span>
      <span>:</span>
      <span>{("0" + (value % 60)).slice(-2)}</span>
    </>
  );
};

export default Time;
