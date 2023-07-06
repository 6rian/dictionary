import { Meaning as MeaningProps } from "../api/dictionary"

function Meaning(props: MeaningProps) {
  const { partOfSpeech, definitions } = props

  const definitionsItems = definitions.map((d) => <li key={d.definition}>{d.definition}</li>)

  return (
    <>
      <h2 className="Meaning__pos">{partOfSpeech}</h2>
      <h3>Meaning</h3>
      <ul>{definitionsItems}</ul>
    </>
  )
}

export default Meaning
