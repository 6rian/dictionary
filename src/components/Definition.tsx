import { DictionaryResult, Phonetic } from '../api/dictionary'
import DefinitionHeading from './DefinitionHeading'
import Meaning from './Meaning'
import Sources from './Sources'
import type { SearchFn } from '../types'

function findPhoeneticWithAudio(phoenetics: Phonetic[]): Phonetic {
  const p = phoenetics.find(ph => ph.audio !== '')
  return p !== undefined ? p : phoenetics[0]
}

function Definition({
  definition,
  updateSearch
}: {
  definition: DictionaryResult,
  updateSearch: SearchFn,
}) {
  const meanings = definition.meanings.map((m, i) => <Meaning key={i} {...m} updateSearch={updateSearch} />)

  return (
    <article className="Definintion">
      <DefinitionHeading
        word={definition.word}
        phoenetic={findPhoeneticWithAudio(definition.phonetics)}
      />
      {meanings}
      {definition.sourceUrls.length && <Sources urls={definition.sourceUrls} />}
    </article>
  )
}

export default Definition

