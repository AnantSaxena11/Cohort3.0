import React from 'react'
function Button({
    children,
    disabled
}) {
  return (
    <span  className= {`rounded-2xl text-2xl cursor-pointer ${disabled ? "bg-blue-400" : "bg-green-400"}  text-white px-32 py-8`}>
        {children}
    </span>
  )
}

export default Button