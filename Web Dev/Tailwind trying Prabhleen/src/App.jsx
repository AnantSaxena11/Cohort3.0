function App() {
  function onchange()
  {
    document.querySelector("html").classList.toggle("dark",document.querySelector("html").classList[0] == "dark" ? false : true)
  }
  return (
    <div className= "h-screen bg-white dark:bg-blue-800">
      <button onClick={onchange}>Mode Change</button>
    </div>
  )
}

export default App