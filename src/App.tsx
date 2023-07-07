import { useState, useEffect } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import DefinitionNotFound from './components/DefinitionNotFound'
import Definition from './components/Definition'
import DictionaryAPI from './api/dictionary'
import type { DictionaryResult } from './api/dictionary'

import response from './fixtures/dictionary_api_response.json'

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Font {
  SansSerif = 'sans-serif',
  Serif = 'serif',
  Mono = 'mono',
}

enum View {
  Default,
  DefinitionNotFound,
  ShowDefinition,
}

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Light)
  const [font, setFont] = useState<Font>(Font.SansSerif)
  const [view, setView] = useState<View>(View.Default)
  const [word, setWord] = useState<DictionaryResult>(response[0])

  function toggleTheme() {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
  }

  async function search(query: string) {
    try {
      const result = await DictionaryAPI.getWord(query)
      setWord(result)
      setView(View.ShowDefinition)
    } catch (err) {
      if (err instanceof DictionaryAPI.NotFoundError) {
        setView(View.DefinitionNotFound)
      }
      // TODO -- show generic error?
    }
  }

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement
    body.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement
    body.dataset.font = font
  })

  return (
    <div className="container">
      <Header
        toggleTheme={toggleTheme}
        setFont={(font: Font) => setFont(font)}
      />
      <Search search={search} />
      {view === View.DefinitionNotFound && <DefinitionNotFound />}
      {view === View.ShowDefinition && <Definition definition={word} />}
    </div>
  )
}

export default App
