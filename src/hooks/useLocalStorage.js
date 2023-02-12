import { useState } from "react";

const initialValue = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));

  return value;
};

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(window.localStorage.getItem(key)) ||
      initialValue(key, defaultValue)
  );

  const setLocalStorageValue = (newValue) => {
    setValue(newValue);

    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalStorageValue];
};

export default useLocalStorage;
