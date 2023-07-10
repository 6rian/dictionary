import { SearchFn } from '../App'
import type { Meaning } from '../api/dictionary'

type MeaningProps = Meaning & {
  updateSearch: SearchFn
}

function Meaning(props: MeaningProps) {
  const { partOfSpeech, definitions, synonyms, updateSearch } = props

  const definitionsItems = definitions.map((d) => (
    <li key={d.definition}>
      {d.definition}
      {d.example && <p>{d.example}</p>}
    </li>
  ))

  const synonymsItems = synonyms.map((s) => (
    <li key={s}>
      <button onClick={() => updateSearch(s)}>{s}</button>
    </li>
  ))

  return (
    <div className="Meaning">
      <div className="Meaning__heading">
        <h2>{partOfSpeech}</h2>
      </div>
      <h3>Meaning</h3>
      <ul>{definitionsItems}</ul>
      {synonymsItems.length > 0 && (
        <div className="Meaning__synonyms">
          <span>Synonyms</span>
          <ul>{synonymsItems}</ul>
        </div>
      )}
    </div>
  )
}

export default Meaning
