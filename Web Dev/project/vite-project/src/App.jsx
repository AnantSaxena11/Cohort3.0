import Button from "./components/Button"
import Input from "./components/input"
import Otp from "./components/Otp"

function App() {

  return (
    <div className="h-screen w-screen bg-blue-700">
      {/* <Input type = {"text"} placeholder = {"email"}/>
    <Button disabled = {true} children = {"Continue"}/> */}
    <Otp/>
    </div>
  )
}

export default App
