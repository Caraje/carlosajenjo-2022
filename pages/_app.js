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
  const [theme, setTheme] = useState('light') // Initialize this to either "dark" or "light"

  const toggleTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
}

export default MyApp
