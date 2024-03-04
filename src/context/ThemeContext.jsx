import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

function ThemeContextProvider({children}) {
  const [themeName, setThemeName] = useState('light')

  const handleTheme = () => {
    setThemeName(prev => {
      const themeInfo = prev === 'light' ? "dark" : "light"
      changeTheme(themeInfo)
      localStorage.setItem('theme', themeInfo)
      return themeInfo
    })
  }
  // tema degistirme fonksiyonu
  const changeTheme = (themeName) => {
    document.documentElement.setAttribute('data-bs-theme', themeName)
  }
  // localStorage ile tema degisikligi kaydetme
  useEffect(() => {
    const storedThemeName = localStorage.getItem('theme') ?? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    changeTheme(storedThemeName)
    setThemeName(storedThemeName)
  }, [])

  return <ThemeContext.Provider value={{themeName , handleTheme}}>
    {children}
  </ThemeContext.Provider>
}

export {
  ThemeContextProvider,
  ThemeContext
}