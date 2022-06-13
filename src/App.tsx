import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppContainer } from "./App.style";
import Layouts from "./layouts";
import Providers from "./providers";

import router from "./router";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
