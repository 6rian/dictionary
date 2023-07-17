import { DictionaryResult } from '../api/dictionary'
import { Font, Theme } from '../types'

export interface AppState {
  font: Font
  theme: Theme
  searchTerm: string
  definition: DictionaryResult | null
}

export const initialAppState: AppState = {
  font: Font.SansSerif,
  theme: Theme.Light,
  searchTerm: '',
  definition: null,
}

