/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MainNavigation from './commons/MainNavigation';
import Storage from './storage/index';

const App = () => {
  return (
    <Storage>
      <MainNavigation />
    </Storage>
  );
};

export default App;
