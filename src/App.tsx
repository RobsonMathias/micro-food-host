import React from 'react';
import {Routes} from './pages';
import {NavApp, StyleProvider} from './components';


function App() {
  return (
    <StyleProvider>
      <Routes>
        <NavApp/>
      </Routes>
    </StyleProvider>
  );
}

export default App;
