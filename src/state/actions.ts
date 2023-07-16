import { Font, Theme } from '../types'

export enum AppActionKind {
  SetFont,
  SetTheme,
}

export interface SetFontAction {
  type: AppActionKind.SetFont
  payload: Font
}

export interface SetThemeAction {
  type: AppActionKind.SetTheme
  payload: Theme
}

export type AppAction =
  | SetFontAction
  | SetThemeAction


// Helpers

export const setFont = (font: Font): SetFontAction => ({
  type: AppActionKind.SetFont,
  payload: font,
})

export const setTheme = (theme: Theme): SetThemeAction => ({
  type: AppActionKind.SetTheme,
  payload: theme,
})


