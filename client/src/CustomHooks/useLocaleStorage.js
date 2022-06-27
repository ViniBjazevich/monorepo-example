import { useState, useEffect } from "react";

function getValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  return savedValue ?? initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
