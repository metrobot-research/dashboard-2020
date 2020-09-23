import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/core';
import { RecoilRoot } from 'recoil';
import Theme from './theme';
import Home from './pages/home';
import Navbar from './organisms/navbar';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App() {
  return (
    <Router>
      <ChakraProvider resetCSS theme={Theme}>
        <ColorModeProvider>
          <RecoilRoot>
            <Navbar />
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </RecoilRoot>
        </ColorModeProvider>
      </ChakraProvider>
    </Router>
  );
}
