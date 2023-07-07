import { useRef } from 'react'
import { Phonetic } from '../api/dictionary'
import playIcon from '../assets/play.svg'

function DefinitionHeading({
  word,
  phoenetic,
}: {
  word: string
  phoenetic: Phonetic
}) {

  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <div className="DefinitionHeading">
      <h1 className="DefinitionHeading__word">{word}</h1>
      <span className="DefinitionHeading__phoenetic">{phoenetic.text}</span>
      {phoenetic.audio && (
        <>
          <audio src={phoenetic.audio} ref={audioRef} />
          <img
            src={playIcon}
            className="DefinitionHeading__play"
            onClick={() => audioRef.current?.play()}
          />
        </>
      )}
    </div>
  )
}

export default DefinitionHeading
