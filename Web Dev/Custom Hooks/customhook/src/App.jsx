import {useRef } from "react";

function useDebounce(originalFn)
{
    const currentClock = useRef();

    const fn = () =>{
      clearTimeout(currentClock.current);
      currentClock.current = setTimeout(originalFn,200)
    }
    return fn
}

function App() {

  function sendDatatobackend()
  {
    fetch("api.amazon.com/search");
  }

  const debounceFn = useDebounce(sendDatatobackend)
 
  return (
    <>
      <input type="text"  onChange={debounceFn}/>
    </>
  );
}

export default App;
