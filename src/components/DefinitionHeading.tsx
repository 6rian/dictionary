import { Phonetic } from '../api/dictionary'
import playButton from '../assets/play.svg'

function DefinitionHeading({
  word,
  phoenetic,
}: {
  word: string
  phoenetic: Phonetic
}) {
  return (
    <div className="DefinitionHeading">
      <h1 className="DefinitionHeading__word">{word}</h1>
      <span className="DefinitionHeading__phoenetic">{phoenetic.text}</span>
      <img src={playButton} className="DefinitionHeading__play" />
    </div>
  )
}

export default DefinitionHeading
