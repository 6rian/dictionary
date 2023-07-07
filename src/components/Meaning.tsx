import type { Meaning as MeaningProps } from '../api/dictionary'

function Meaning(props: MeaningProps) {
  const { partOfSpeech, definitions } = props

  const definitionsItems = definitions.map((d) => (
    <li key={d.definition}>
      {d.definition}
      {d.example && <p>{d.example}</p>}
    </li>
  ))

  return (
    <div className="Meaning">
      <div className="Meaning__heading">
        <h2>{partOfSpeech}</h2>
      </div>
      <h3>Meaning</h3>
      <ul>{definitionsItems}</ul>
    </div>
  )
}

export default Meaning
