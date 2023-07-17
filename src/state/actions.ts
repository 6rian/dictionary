import { DictionaryResult } from '../api/dictionary'
import { Font, Theme } from '../types'

export enum AppActionKind {
  SetFont,
  SetTheme,
  SetSearchTerm,
  SetDefinition,
}

export interface SetFontAction {
  type: AppActionKind.SetFont
  payload: Font
}

export interface SetThemeAction {
  type: AppActionKind.SetTheme
  payload: Theme
}

export interface SetSearchTermAction {
  type: AppActionKind.SetSearchTerm
  payload: string
}

export interface SetDefinition {
  type: AppActionKind.SetDefinition
  payload: DictionaryResult
}

export type AppAction =
  | SetFontAction
  | SetThemeAction
  | SetSearchTermAction
  | SetDefinition


// Helpers

export const setFont = (font: Font): SetFontAction => ({
  type: AppActionKind.SetFont,
  payload: font,
})

export const setTheme = (theme: Theme): SetThemeAction => ({
  type: AppActionKind.SetTheme,
  payload: theme,
})

export const setSearchTerm = (searchTerm: string): SetSearchTermAction => ({
  type: AppActionKind.SetSearchTerm,
  payload: searchTerm,
})

export const setDefinition = (definition: DictionaryResult): SetDefinition => ({
  type: AppActionKind.SetDefinition,
  payload: definition,
})


