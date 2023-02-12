import { useState } from "react";

const DEFAULT_INFO = { best: [], currentLevelId: 1, theme: "meme" };

const getFromLocalStorage = (key, deafultValue) => {
  const initial = JSON.parse(window.localStorage.grtItem(key));

  return initial || deafultValue;
};

const useInfo = (levelsAmount) => {
  const [value, setValue] = useState(getFromLocalStorage);
};

export default useInfo;
