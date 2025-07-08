import { useState } from "react"

function App() {

  const [sideBar, setSidebar] = useState(true)
  return (
    <div className="flex">
      <SideBar />
      <MainContent />
    </div>
  )
}

function SideBar() {
  return (
    <div className="bg-green-800 w-96 h-screen">
      I am a SideBar
    </div>
  )
}
function MainContent() {
  return (
    <div className="w-full">
      <div className="h-48 bg-black">
      </div>
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-10 md:col-span-2 h-96 rounded-2xl shadow bg-red-200 -translate-y-12"></div>
        <div className="col-span-10 md:col-span-5 h-96 rounded-2xl shadow bg-orange-500 c"></div>
        <div className="col-span-10 md:col-span-3 h-96 rounded-2xl shadow bg-purple-500 "></div>
      </div>
    </div>
  )
}
export default App