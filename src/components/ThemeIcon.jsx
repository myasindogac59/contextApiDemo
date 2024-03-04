import { Children, useContext, useState } from "react"
import { lightMode,darkMode } from './icons'
import { ThemeContext } from "../context/ThemeContext"

const ThemeIcon = (props) => {
  const {themeName, handleTheme} =  useContext(ThemeContext)
  
  return (
    <>
      {
        themeName === 'light' ? <button onClick={handleTheme} className="btn text-light">{lightMode} Light</button> : <button onClick={handleTheme} className="btn text-light">{darkMode}Dark</button>
      }
    </>
  )
}

export default ThemeIcon;