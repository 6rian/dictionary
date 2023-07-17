import { AppState } from './state';
import { AppActionKind, AppAction } from './actions';

export const appReducer = (state: AppState, action: AppAction): AppState => {
  const { type, payload } = action
  switch (type) {
    case AppActionKind.SetFont:
      return {
        ...state,
        font: payload
      }
    case AppActionKind.SetTheme:
      return {
        ...state,
        theme: payload
      }
    case AppActionKind.SetSearchTerm:
      return {
        ...state,
        searchTerm: payload
      }
    case AppActionKind.SetDefinition:
      return {
        ...state,
        definition: payload
      }
    default:
      return state
  }
}
