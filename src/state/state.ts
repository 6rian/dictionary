import { Font, Theme } from '../types'

export interface AppState {
  font: Font
  theme: Theme
}

export const initialAppState: AppState = {
  font: Font.SansSerif,
  theme: Theme.Light,
}

