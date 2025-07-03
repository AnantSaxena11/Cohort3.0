import { createContext, useContext, useEffect, useState } from "react"

const bulbContext = createContext();

function App() {
  const [bulbOn, setbulbOn] = useState(true);
  return <>
    <bulbContext.Provider value={{
      bulbOn: bulbOn,
      setbulbOn: setbulbOn
    }}>
      <Lightbulb />
    </bulbContext.Provider>
  </>
}

function Lightbulb() {
  return <>
    <Bulbstate />
    <Togglebulbstate />
  </>
}

function Bulbstate() {
const {bulbOn} = useContext(bulbContext)
  return <div>

    {bulbOn ? "Blulbon" : "bulb off"}
  </div>
}

function Togglebulbstate() {
  const {setbulbOn} = useContext(bulbContext)
  function change() {
    setbulbOn(currentState => !currentState)
  }
  return <>
    <button onClick={change}>Toggle the bulb</button>
  </>
}
export default App
