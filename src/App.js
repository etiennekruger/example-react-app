import React from "react";

import "./App.css";

import { AuthProvider } from "Contexts/Auth";
import { ApiProvider } from "Contexts/Api";
import Greeter from "Components/Greeter";
import ItemList from "Components/ItemList";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Greeter />
        <ApiProvider>
          <ItemList />
        </ApiProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
