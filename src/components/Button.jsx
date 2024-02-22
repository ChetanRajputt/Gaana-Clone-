import React from 'react'

// custom styles for the Button component

function Button({
  children,
  type = "button",
  bgColor = "bg-red-600",
  textColor = "text-white",
  textSize = "text-sm",
  hoverColor = "hover:bg-red-600",
  className = '',
  ...props
}) {
  return (
    <button className={`px-3 py-1 rounded-full delay-200 h-[27px] overflow-hidden ${textSize} ${bgColor}
   ${textColor} ${hoverColor} ${className}`}  {...props}>
      {children}
    </button>
  )
}

export default Button
