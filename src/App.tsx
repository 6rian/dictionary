import { useState, useEffect } from 'react'
import Header from './components/Header'

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Light)

  function toggleTheme() {
    console.log('toggle', theme)
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
  }

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement
    body.dataset.theme = theme
  }, [theme])

  return (
    <div className="container">
      <Header toggleTheme={toggleTheme} />
      <p>search</p>
      <p>main area</p>
      <p>😕</p>
      <h2>No Definitions Found</h2>
      <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  )
}

export default App
