import React from 'react'

function BasicSideBar() {
  return (
    <div className="flex">
      <div className="transition-all duration-1000 md:w-96 h-screen w-0">
        SideBar
      </div>
      <div className="bg-green-800 w-full h-screen">
        COntent
      </div>
    </div>
  )
}

export default BasicSideBar