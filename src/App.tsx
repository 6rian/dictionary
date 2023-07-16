import { useState, useEffect, useContext } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import DefinitionNotFound from './components/DefinitionNotFound'
import Definition from './components/Definition'
import DictionaryAPI from './api/dictionary'
import type { DictionaryResult } from './api/dictionary'
import response from './fixtures/dictionary_api_response.json'
import { AppContext } from './state/context'

enum View {
  Default,
  DefinitionNotFound,
  ShowDefinition,
}

export type SearchFn = (query: string) => void

function App() {
  const [view, setView] = useState<View>(View.Default)
  const [word, setWord] = useState<DictionaryResult>(response[0])

  const { state } = useContext(AppContext)
  const { font, theme } = state

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
  }, [font])

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Search search={search} />
        {view === View.DefinitionNotFound && <DefinitionNotFound />}
        {view === View.ShowDefinition && <Definition definition={word} updateSearch={search} />}
      </div>
      <Footer />
    </div>
  )
}

export default App
