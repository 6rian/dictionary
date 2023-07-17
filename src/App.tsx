import { useState, useEffect, useContext } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import DefinitionNotFound from './components/DefinitionNotFound'
import Definition from './components/Definition'
import DictionaryAPI from './api/dictionary'
import { AppContext } from './state/context'
import { setDefinition, setSearchTerm } from './state/actions'

enum View {
  Default,
  DefinitionNotFound,
  ShowDefinition,
}

export type SearchFn = (query: string) => void

function App() {
  const [view, setView] = useState<View>(View.Default)

  const { state, dispatch } = useContext(AppContext)
  const { font, theme, searchTerm, definition } = state

  async function search(query: string) {
    try {
      dispatch(setSearchTerm(query))
      const result = await DictionaryAPI.getWord(query)
      dispatch(setDefinition(result))
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
        <Search search={search} searchTerm={searchTerm} />
        {view === View.DefinitionNotFound && <DefinitionNotFound />}
        {view === View.ShowDefinition && definition && <Definition definition={definition} updateSearch={search} />}
      </div>
      <Footer />
    </div>
  )
}

export default App
