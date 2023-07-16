import React from 'react';
import { AppState, initialAppState } from './state';
import { AppAction } from './actions';

export const AppContext = React.createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialAppState,
  dispatch: () => undefined,
});
