export interface DictionaryResult {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

export interface Phonetic {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }
}

async function getWord(word: string): Promise<DictionaryResult> {
  const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

  if (resp.status === 404) {
    throw new NotFoundError(`Word not found: ${word}`)
  }

  const data: DictionaryResult[] = await resp.json()
  return data[0]
}

export default {
  getWord,
  NotFoundError
}
