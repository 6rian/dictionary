import { Meaning as MeaningProps } from "../api/dictionary"

function Meaning(props: MeaningProps) {
  const { partOfSpeech } = props
  return (
    <p>{partOfSpeech}</p>
  )
}

export default Meaning
