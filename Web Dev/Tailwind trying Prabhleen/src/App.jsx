import { useState } from 'react';

function App() {
  const [darkmode,setDarkmode] = useState(false);
  function onchange()
  {
    setDarkmode(darkmode => !darkmode)
  }
  return (
    <div className={`h-screen ${darkmode ? "bg-blue-800" : "bg-white"}`}>
      <button onClick={onchange}>Mode Change</button>
    </div>
  )
}

export default App