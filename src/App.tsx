import React from "react";

import Page from "./components/Page";

import { GlobalStyles } from "./styles/GloblaStyles";

const App: React.FC = () => {
  return (
    <>
      <Page />
      <GlobalStyles />
    </>
  );
};

export default App;
