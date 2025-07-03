import { useEffect, useState } from "react";

function App() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  // Toggle visibility every 5 seconds
  useEffect(() => {
    const toggle = setInterval(() => {
      setVisible(v => !v);
    }, 5000);
      return () => clearInterval(toggle);
    
  }, []);

  // Update count every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
     return () => clearInterval(interval); 
  }, []);

  return (
    <>
      {visible && <Timer count={count} />}
    </>
  );
}

function Timer({ count }) {
  return <h1>{count}</h1>;
}

export default App;
