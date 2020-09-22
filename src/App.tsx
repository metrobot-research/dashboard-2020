import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { RecoilRoot } from 'recoil';
import Theme from './theme';
import Home from './pages/home';
import Navbar from './organisms/navbar';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <CSSReset />
        <ColorModeProvider>
          <RecoilRoot>
            <Navbar />

            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </RecoilRoot>
        </ColorModeProvider>
      </ThemeProvider>
    </Router>
  );
}
