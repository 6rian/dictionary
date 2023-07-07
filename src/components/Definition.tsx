import { DictionaryResult, Phonetic } from '../api/dictionary'
import DefinitionHeading from './DefinitionHeading'
import Meaning from './Meaning'

function findPhoeneticWithAudio(phoenetics: Phonetic[]): Phonetic {
  const p = phoenetics.find(ph => ph.audio !== '')
  return p !== undefined ? p : phoenetics[0]
}

function Definition({ definition }: { definition: DictionaryResult }) {
  const meanings = definition.meanings.map((m, i) => <Meaning key={i} {...m} />)
  const sources = definition.sourceUrls.map(url => <li key={url}><a href={url} target="_blank" rel="nofollow">{url}</a></li>)

  //TEMP
  console.log(definition)

  return (
    <article className="Definintion">
      <DefinitionHeading
        word={definition.word}
        phoenetic={findPhoeneticWithAudio(definition.phonetics)}
      />
      {meanings}
      {sources && (
        <>
          <hr />
          <p>Source</p>
          <ul>{sources}</ul>
        </>
      )}

    </article>
  )
}

export default Definition

