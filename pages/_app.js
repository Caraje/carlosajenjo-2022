import '../styles/globals.css'
import '../styles/navBar.css'
import '../styles/mainHome.css'
import '../styles/titles.css'
import '../styles/quote.css'
import '../styles/portfolioCard.css'
import '../styles/aboutMe.css'
import '../styles/contactModal.css'
import '../styles/blogIndex.css'
import '../styles/articlePage.css'
import '../styles/buttonSwitchMode.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const themeColor = JSON.parse(localStorage.getItem('theme'))

    if (themeColor) {
      setTheme(themeColor)
    }
  }, [])
  const [theme, setTheme] = useState(false)

  const toggleTheme = () => {
    setTheme(!theme)
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme, setTheme])
  return <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
}

export default MyApp
