export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Font {
  SansSerif = 'sans-serif',
  Serif = 'serif',
  Mono = 'mono',
}

export type SearchFn = (query: string) => void
