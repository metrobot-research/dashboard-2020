import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/core';
import { RecoilRoot } from 'recoil';
import Theme from './theme';
import Home from './pages/home';
import Navbar from './organisms/navbar';
import { ROS } from './hooks/ros.hook';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App() {
  return (
    <Router>
      <ChakraProvider resetCSS theme={Theme}>
        <RecoilRoot>
          <ROS>
            <Navbar />
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </ROS>
        </RecoilRoot>
      </ChakraProvider>
    </Router>
  );
}
