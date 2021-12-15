import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { MainRoutes } from './navigation';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <MainRoutes />
    </Router>
  );
};

export default App;
