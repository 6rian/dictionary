import { Phonetic } from './api/dictionary'

export function prefersDarkTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function findPhoeneticWithAudio(phoenetics: Phonetic[]): Phonetic {
  const p = phoenetics.find(ph => ph.audio !== '')
  return p !== undefined ? p : phoenetics[0]
}
