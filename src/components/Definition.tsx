import { DictionaryResult } from "../api/dictionary"
import Meaning from "./Meaning"

function Definition({ definition }: { definition: DictionaryResult }) {
  const meanings = definition.meanings.map((m, i) => <Meaning key={i} {...m} />)
  const sources = definition.sourceUrls.map(url => <li key={url}><a href={url} target="_blank" rel="nofollow">{url}</a></li>)

  return (
    <article className="Definintion">
      <h1>{definition.word}</h1>
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

