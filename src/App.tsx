import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppContainer } from "./App.style";
import Layouts from "./layouts";
import Providers from "./providers";

import router from "./router";

import "./i18n";

function App() {
  return (
    <Providers>
      <AppContainer>
        <Layouts>
          <Routes>
            {router.map((route) => (
              <Route
                path={route.path}
                key={route.name}
                element={route.component}
              />
            ))}
          </Routes>
        </Layouts>
      </AppContainer>
    </Providers>
  );
}

export default App;
