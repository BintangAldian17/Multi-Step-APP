import React, { useContext } from "react";
import { DataProvider } from "./components/DataProvider";
import { Container } from "./components/Container";


function App() {

  return (
    <DataProvider>
      <Container />
    </DataProvider>
  );
}

export default App;
