import { useState, useEffect } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import DefinitionNotFound from './components/DefinitionNotFound'

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

enum View {
  Default,
  DefinitionNotFound,
  ShowDefinition,
}

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Light)
  const [view, setView] = useState<View>(View.Default)

  function toggleTheme() {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
  }

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement
    body.dataset.theme = theme
  }, [theme])

  return (
    <div className="container">
      <Header toggleTheme={toggleTheme} />
      <Search />
      {view === View.DefinitionNotFound && <DefinitionNotFound />}
    </div>
  )
}

export default App
