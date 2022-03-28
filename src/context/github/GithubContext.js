import { createContext, useReducer } from "react";

import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({children}) => {
  const initState = {
    loading: false,
    users: [],
    user: {},
    repos: []
  }

  const [state, dispatch] = useReducer(githubReducer, initState);

  return <GithubContext.Provider value={{
    ...state,
    dispatch
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext;