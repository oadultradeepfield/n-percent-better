import { useState, useEffect } from "react";

const useLocalStorageState = (key: any, defaultValue: any) => {
  const [state, setState] = useState(
    () => localStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState] as const;
};

export default useLocalStorageState;
