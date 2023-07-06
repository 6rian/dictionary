import { DictionaryResult } from "../api/dictionary"
import Meaning from "./Meaning"

function Definition({ definition }: { definition: DictionaryResult }) {
  console.log(definition)

  const meanings = definition.meanings.map((m, i) => <Meaning key={i} {...m} />)

  return (
    <article className="Definintion">
      <h1>{definition.word}</h1>
      {meanings}
    </article>
  )
}

export default Definition
