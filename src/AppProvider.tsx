import { ReactNode, useReducer } from 'react';
import { initialAppState } from './state/state';
import { appReducer } from './state/reducer';
import { AppContext } from './state/context';

type Props = {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
