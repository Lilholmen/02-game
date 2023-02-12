const representTime = (value) => {
  const minutes = ("0" + Math.floor(+value / 60)).slice(-2);
  const seconds = ("0" + (value % 60)).slice(-2);

  return `${minutes}:${seconds}`;
};

export default representTime;
