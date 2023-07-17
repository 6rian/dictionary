import { DictionaryResult } from '../api/dictionary'
import { Font, Theme } from '../types'
import { prefersDarkTheme } from '../helpers'

export interface AppState {
  font: Font
  theme: Theme
  searchTerm: string
  definition: DictionaryResult | null
}

export const initialAppState: AppState = {
  font: Font.SansSerif,
  theme: prefersDarkTheme() ? Theme.Dark : Theme.Light,
  searchTerm: '',
  definition: null,
}

