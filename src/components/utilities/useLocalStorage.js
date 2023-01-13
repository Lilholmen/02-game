import { useEffect, useState } from "react";

const getLocalStorageValue = (key, defaultValue) => {
  const initial = JSON.parse(window.localStorage.getItem(key));

  return initial || defaultValue;
};

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() =>
    getLocalStorageValue(key, defaultValue)
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
