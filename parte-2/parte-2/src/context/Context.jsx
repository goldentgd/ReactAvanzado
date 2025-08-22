import { createContext, useReducer, useContext } from "react";

const OllamaContext = createContext();

const initialState = { history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_HISTORY":
      return {
        ...state,
        history: [...state.history, { prompt: action.payload.prompt, response: action.payload.response }],
      };
    default:
      return state;
  }
}

export function OllamaProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <OllamaContext.Provider value={{ state, dispatch }}>
      {children}
    </OllamaContext.Provider>
  );
}

export function useOllamaContext() {
  return useContext(OllamaContext);
}
