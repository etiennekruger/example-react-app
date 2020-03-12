import React, { useContext } from "react";

import Client from "./Client";
import { AuthContext } from "Contexts/Auth";

export const ApiContext = React.createContext({ api: null });
export const ApiConsumer = ApiContext.Consumer;

export function ApiProvider(props) {
  const auth = useContext(AuthContext);
  const value = new Client(auth.token);

  return (
    <ApiContext.Provider value={value}>{props.children}</ApiContext.Provider>
  );
}
