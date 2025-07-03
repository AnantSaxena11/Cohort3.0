import { createContext, useState } from "react";

const CounterContext = createContext();

function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterContextProvider };
